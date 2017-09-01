const express = require('express');
const myrouter = express.Router();

myrouter.get('/', (req, res)=>{
    res.send('this is the main dummy page');
});


myrouter.get('/:whatever',(req, res)=>{
    res.send(`You just typed ${req.params.whatever}`)
})

module.exports = myrouter;