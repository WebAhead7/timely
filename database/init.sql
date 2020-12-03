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
    id SERIAL PRIMARY KEY,
    doc_id INTEGER REFERENCES doctors(id),
    cal_data TEXT NOT NULL
);

 INSERT INTO clients (firstname,lastname,email,pass,imgUrl) VALUES
  ('alaa','bashiyi','alaa@gmail.com' ,'321','imgimg.jpg');

  INSERT INTO clients (firstname,lastname,email,pass,imgUrl) VALUES
  ('sam','fam','sam@gmail.com' ,'321','imgimg.jpg');

  INSERT INTO clients (firstname,lastname,email,pass,imgUrl) VALUES
  ('awad','mhmd','awad@gmail.com' ,'321','imgimg.jpg');

  INSERT INTO doctors (firstname,lastname,email,title,pass,dsc,imgUrl) VALUES
  ('emil','shihadi','awad@gmail.com' ,'eyes','321','eye doctor for all ages','imgimg.jpg');

INSERT INTO doctors (firstname,lastname,email,title,pass,dsc,imgUrl) VALUES
  ('lujain','abdullatif','luj@gmail.com' ,'spirit','321','spirit doctor for life','imgimg.jpg');

INSERT INTO doctors (firstname,lastname,email,title,pass,dsc,imgUrl) VALUES
  ('mario','saliba','mario@gmail.com' ,'conflicts','321','conflicts doctor for life','imgimg.jpg');

COMMIT;

