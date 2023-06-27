const mongoose = require('mongoose');
const DB = "mongodb://127.0.0.1:27017/csvUpload";
mongoose.connect(DB).then(() => {
    console.log('connection successfully');

}).catch((err) => {
    console.log('no connection ', err);

});

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error in connection to MongoDB"));
db.once('open', function () {
    console.log('Connected to Database: Mongodb');
});


module.exports = db;


