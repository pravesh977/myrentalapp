const express = require('express');
const myrouter = express.Router();

myrouter.get('/', (req, res)=>{
    res.send('this is list of rentals route');
});

module.exports = myrouter;