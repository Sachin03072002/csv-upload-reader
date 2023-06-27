//acquiring express
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 8000;

//acquiroing the db
const db = require('./config/mongoose');
//including the static files
app.use(express.static('./assets'));

//route for csv path
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(expressLayouts)
//extract styles and script form sub pages into the  layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//use express router
app.get("/", require('./routes/index'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.get('/', (req, res) => {
    res.render('index', { title: "Home Page" });
})

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Started application on port ${port}`);
});