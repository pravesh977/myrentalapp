const express = require('express');
const myrouter = express.Router();
const controller = require('../controllers/rentalController');

// myrouter.get('/', (req, res)=>{
//     res.send('this is list of rentals route');
// });
//instead of above codes, we are going to send the response as "do whatever controller.index wants"
myrouter.get('/', controller.index);
myrouter.get('/edit/:id', controller.edit);
myrouter.get('/:id', controller.show);
myrouter.post('/', controller.create);
myrouter.put('/:id', controller.update);
myrouter.delete('/:id', controller.destroy);

module.exports = myrouter;