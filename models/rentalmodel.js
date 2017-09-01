const db = require('../db/config');
const RentalsObject = {};

RentalsObject.findall = () => {
    return db.query('SELECT * FROM rentaltable');
};

RentalsObject.findById = (id) => {
    return db.oneOrNone('SELECT * FROM rentaltable WHERE id = $1', [id]);
};

RentalsObject.create = (createrental) => {
    return db.one (
        `INSERT INTO rentaltable
        (title, description, bedrooms, bathrooms, city, state_id, zipcode, pets, parking, heating, cooling, availablefrom, price, wifi)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8), $9, $10, $11, $12, $13, $14) RETURNING *
        `,
        [createrental.title, createrental.description, createrental.bedrooms, createrental.bathrooms, createrental.city, createrental.state_id, createrental.zipcode, createrental.pets, createrental.parking, createrental.heating, createrental.cooling, createrental.availablefrom, createrental.price, createrental.wifi]
    );
};


module.exports = RentalsObject;
