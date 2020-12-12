// main package
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// controller files
const home = require('./routes/hame');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
// parse application
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

// read folders
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'util')));

// active request - respone
app.use(home);

app.listen(3000, () => console.log('connect to prot 3000....'));