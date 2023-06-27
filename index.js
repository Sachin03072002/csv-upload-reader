//acquiring express
const express = require("express");
const router = require('./routes/index');
const ejs = require('ejs');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
app.use(express.static('./assets'));
app.use(expressLayouts)
//extract styles and script form sub pages into the  layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//use express router
app.get("/", require('./routes/index'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('index', { title: "Home Page" });
})

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Started application on port ${port}`);
});