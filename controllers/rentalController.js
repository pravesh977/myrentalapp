const RentalsObject = require('../models/rentalmodel');
const controller = {};

controller.index = (req, res) => {
    RentalsObject.findAll()
        .then(wholelist => {
            //console.log(wholelist);
            // res.render('rentalslist/rentals-index', {
            //     documentTitle: 'Total List of Rentals',
            //     rentalsData: wholelist,
            //not using above codes because we are now making API and dont need views
            res.json({
                message: 'okay',
                rentalsData: wholelist,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
};

controller.show = (req, res) => {
    RentalsObject.findById(req.params.id)
        .then(singlerental => {
            //console.log(singlerental);
            res.json({
                message: 'okay',
                rentalsData: singlerental,
                });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
};

controller.create = (req, res) => {
    RentalsObject.create({
        title: req.body.title,
        description: req.body.description,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        city: req.body.city,
        state_id: req.body.state_id,
        zipcode: req.body.zipcode,
        pets: req.body.pets,
        parking: req.body.parking,
        heating: req.body.heating,
        cooling: req.body.cooling,
        availablefrom: req.body.availablefrom,
        price: req.body.price,
        wifi: req.body.wifi
    })
    .then(jsonAfterAdding => {
        res.json({
            message: 'okay',
            //what happens if we change rentalsData to singleDataRental or something random like hellodata? try later with react
            //in J's example when she says return the data from the database, maybe she means return the data that was just added?
            hellodata: jsonAfterAdding
        });
    }).catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
};

controller.destroy = (req, res) => {
    RentalsObject.destroy(req.params.id)
        .then(() => {
            res.json({
                message: 'deleted rental'
            });
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
        });  
};


module.exports = controller;