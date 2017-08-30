\connect nepaliroomsdb

CREATE TABLE IF NOT EXISTS statestable (
    id BIGSERIAL PRIMARY KEY,
    states VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS rentaltable (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(1024),
    bedrooms INTEGER(10),
    bathrooms INTEGER(10),
    city VARCHAR(255),
    state_id INTEGER REFERENCES statestable(id),
    zipcode INTEGER(10),
    pets VARCHAR(255),
    parking VARCHAR(255),
    heating VARCHAR(255),
    cooling VARCHAR(255),
    availablefrom date,
    price INTEGER(255),
    wifi VARCHAR(255)
);