const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const logger = require('morgan');
const bodyParser = require('body-parser');

const listofrentals = require('./routes/listofrentals');
const dummyjson = require('./routes/dummyjson');
const emailroute = require('./routes/emailroute');

app.listen(port);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'client/reactrentalapp/build')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//the root route
app.get('/api', (req, res)=> {
    res.send("hello and welcome to the new page... add instructions for api endpoints");
});

app.use('/api/listofrentals', listofrentals);
app.use('/dummyjson', dummyjson);
app.use('/emailroute', emailroute);
// app.get('/anything/:anythingYouWant', function(req, res){
//   res.send(
//     `<h1> Your wish, my command! You requested: ${req.params.anythingYouWant}</h2>`
//   );
// });


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/reactrentalapp/build', 'index.html'));
});

console.log(`nepali roommate server running on port ${port}`);