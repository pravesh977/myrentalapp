const RentalsObject = require('../models/rentalmodel');
const controller = {};

controller.index = (req, res) => {
    RentalsObject.findAll()
        .then(wholelist =>{
            res.render('rentalslist/rentals-index', {
                documentTitle: 'Total List of Rentals',
                rentalsData: wholelist,
            });
        })
        .catch(err => {
            res.status(400).json(err);
        });
};


module.exports = controller;