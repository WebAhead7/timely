BEGIN;

DROP TABLE IF EXISTS doctors, clients, calendar CASCADE;

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    title TEXT NOT NULL,
    pass VARCHAR(255) NOT NULL,
    dsc TEXT NOT NULL,
    imgUrl TEXT NOT NULL
);

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    pass VARCHAR(255) NOT NULL,
    imgUrl TEXT NOT NULL
);

CREATE TABLE calendar (
    doc_id VARCHAR(255) NOT NULL,
    cal_data TEXT NOT NULL
);


COMMIT;

