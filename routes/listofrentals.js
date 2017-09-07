const express = require('express');
const myrouter = express.Router();
const controller = require('../controllers/rentalController');

// myrouter.get('/', (req, res)=>{
//     res.send('this is list of rentals route');
// });
//instead of above codes, we are going to send the response as "do whatever controller.index wants"
myrouter.get('/', controller.index);
myrouter.get('/:id', controller.show);
myrouter.post('/', controller.create);
myrouter.delete('/:id', controller.destroy);

module.exports = myrouter;