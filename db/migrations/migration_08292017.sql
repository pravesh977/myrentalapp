\connect rentalsdatabase

CREATE TABLE IF NOT EXISTS statestable (
    id BIGSERIAL PRIMARY KEY,
    states VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS rentaltable (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    imageurl VARCHAR(1024),
    bedrooms INTEGER,
    bathrooms INTEGER,
    city VARCHAR(255),
    state_id INTEGER REFERENCES statestable(id),
    zipcode INTEGER,
    parking VARCHAR(255),
    pets VARCHAR(255),
    heating VARCHAR(255),
    cooling VARCHAR(255),
    availablefrom date,
    price INTEGER,
    wifi VARCHAR(255)
);