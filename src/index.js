const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlerbars = require('express-handlebars');

const route = require('./routes/index');

const app = express();
const port = 3000;

// app.use(morgan('combined'));

app.engine('hbs', handlerbars({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'))

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

route(app);

app.listen(port,()=> console.log('http://localhost:3000/'));