const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path');
const FILE_PATH = path.join('uploads/csv');


const fileSchema = new mongoose.Schema({
    filePath: {
        type: String,
    },
    originalName: {
        type: String,
    },
    file: {
        type: String,
    },

},
    {
        timestamps: true,
    });


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "..", FILE_PATH));

    }, filename: function (Req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, file.filename + "_" + uniqueSuffix);
    }
});

fileSchema.statics.uploadedCSV = multer({ storage: storage }).single('file');
fileSchema.statics.csvPAth = FILE_PATH;


const File = mongoose.model('File', fileSchema);


module.exports = File;