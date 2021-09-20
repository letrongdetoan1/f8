const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlerbars = require('express-handlebars');

const app = express();
const port = 4000;

app.use(morgan('combined'));

app.engine('hbs', handlerbars({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'))

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => res.render('home'));
app.get('/new', (req, res) => res.render('new'));

app.listen(port,()=> console.log('http://localhost:3000/'));