const File = require('../models/file');
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const FILES_PATH = path.join("/uploads/csv");


module.exports.home = (req, res) => {

    return res.render('home', {
        title: 'CSVReader | Home'
    })
}

module.exports.uploadFile = async function (req, res) {
    try {
        File.uploadCsv(req, res, async function (err) {
            if (err) {
                console.log('****MULTER Error', err);
            }
            console.log(req.file);
            if ((req.file && req.file.mimetype == "application/vmd.ms-excel") || (req.file && req.file.mimetype == "text/csv")) {
                console.log(true);
                console.log(req.file);
                let file = await File.create({
                    filePath: req.file.path,
                    file: req.file.filename,
                    originalName: req.file.originalname
                });
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        message: 'error in creating Note or Uploading File',
                    });
                }
                console.log('file uploaded');
                return res.redirect("back");
            } else {
                console.log("Please Upload csv Format file");
                return res.redirect("back");

            }
            return res.redirect("back");
        });
    } catch (err) {
        console.log('Cant update', err);
        return res.redirect("back");

    }

}

module.exports.showFile = async (req, res) => {
    console.log('inside fiel', req.quiery);
    let filePath = await File.findById(req.query.file_id);
    console.log(filePath);
    const results = [];
    const header = [];
    filePath.createReadStream(filePath.filePath).pipe(csv()).on("headers", (Headers) => {
        Headers.map((head) => {
            header.push(head);
        });
        console.log("headers = >", header);
    }).on("data", (data) => results.push(data)).on("end", () => {
        console.log(results.length);
        let page = req.query.page;
        console.log("page=>", req.query.page);
        let startSlice = (page - 1) * 100 + 1;
        let endSlice = page * 100;
        let sliceResults = [];
        let totalPages = Math.ceil(results.length / 100);
        if (endSlice < results.length) {
            sliceResults = results.slice(startSlice, endSlice + 1);
        } else {
            sliceResults = results.slice(startSlice);
        }
        return res.render('file', {
            title: filePath.originalName,
            head: header,
            data: sliceResults,
            length: results.length,
            page: req.query.page,
            totalPages: totalPages,
            file: filePath
        });
    });
}

module.exports.deleteFile = async function (req, res) {
    console.log(req.params.id);
    try {
        const fileName = req.params.id;
        const isFile = await File.findOne({ file: fileName });
        console.log(isFile);
        if (isFile) {
            fs.unlinkSync(isFile.filePath);
            await File.deleteOne({ file: fileName });
            console.log('file is deleted');
            return res.rediredct('back');

        } else {
            console.log('file not found');
            return res.redirect('back');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}