const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const listofrentals = require('./routes/listofrentals');
const dummyjson = require('./routes/dummyjson');
app.listen(port);



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