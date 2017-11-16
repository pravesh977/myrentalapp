const db = require('../db/config');
const RentalsObject = {};

RentalsObject.findAll = () => {
    return db.query('SELECT * FROM rentaltable');
};

RentalsObject.findById = (id) => {
    return db.oneOrNone('SELECT * FROM rentaltable WHERE id = $1', [id]);
};

RentalsObject.create = (createrental) => {
    return db.one (
        `INSERT INTO rentaltable
        (title, description, imageurl, bedrooms, bathrooms, city, state_id, zipcode, parking, pets, heating, cooling, availablefrom, price, wifi)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *
        `,
        [createrental.title, createrental.description, createrental.imageurl, createrental.bedrooms, createrental.bathrooms, createrental.city, createrental.state_id, createrental.zipcode, createrental.parking, createrental.pets, createrental.heating, createrental.cooling, createrental.availablefrom, createrental.price, createrental.wifi]
    );
};

RentalsObject.update = (editRental, id) => {
    return db.one(
        `
            UPDATE rentaltable SET
            title = $1, 
            description = $2,
            imageurl = $3,
            bedrooms = $4, 
            bathrooms = $5, 
            city = $6, 
            state_id = $7, 
            zipcode = $8, 
            parking = $9, 
            pets = $10, 
            heating = $11, 
            cooling = $12, 
            availablefrom = $13, 
            price = $14, 
            wifi = $15
            WHERE id = $16
            RETURNING *
        `,
        [editRental.title, editRental.description, editRental.imageurl, editRental.bedrooms, editRental.bathrooms, editRental.city, editRental.state_id, editRental.zipcode, editRental.parking, editRental.pets, editRental.heating, editRental.cooling, editRental.availablefrom, editRental.price, editRental.wifi, id]
    )
}

RentalsObject.destroy = (id) => {
    return db.none(
        `
            DELETE FROM rentaltable
            WHERE id = $1
        `,
        [id]
    );
};


module.exports = RentalsObject;
