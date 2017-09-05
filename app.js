const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const logger = require('morgan');
const bodyParser = require('body-parser');

const listofrentals = require('./routes/listofrentals');
const dummyjson = require('./routes/dummyjson');
app.listen(port);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//the root route
app.get('/', (req, res)=> {
    res.send("hello and welcome to the new page");
});

app.use('/listofrentals', listofrentals);
app.use('/dummyjson', dummyjson);
app.get('/anything/:anythingYouWant', function(req, res){
  res.send(
    `<h1> Your wish, my command! You requested: ${req.params.anythingYouWant}</h2>`
  );
});


app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});

console.log(`nepali roommate server running on port ${port}`);