const File = require('../models/file');



// export home
module.exports.home = async function (req, res) {

    try {
        let files = await File.find({})
            .sort('-createdAt');
        // console.log(files)
        return res.render('home', {
            title: 'CSV Upload',
            files: files,
        });

    } catch (error) {
        console.log('Error', error);

    }
}
