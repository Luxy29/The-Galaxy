const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();

// Middleware

// Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/bots', (req, res) => {
    res.render('bots');
});

app.listen(8000, () => {
    console.log('Server started on port 8888');
});
