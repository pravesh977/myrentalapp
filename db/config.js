const pgp = require('pg-promise')();

let db;
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    db = pgp({
        database: 'nepaliroomsdb',
        port: 5432,
        host: 'localhost',
        user: 'postgres',
        password: 'postgres'
    });
} else if (process.env.NODE_ENV === 'production') {
    db = pgp({
        database: 'nepaliroomsdb_production',
        port: 5432,
        host: 'localhost',
         user: 'postgres',
        password: 'postgres'
    });
}
module.exports = db;