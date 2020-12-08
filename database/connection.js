const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();


const connectionString =
  process.env.DATABASE_URL || "postgres://awwadm:123321@localhost:5432/doctime";

const connectionString = process.env.DATABASE_URL;


const db = new pg.Pool({ connectionString });

// db.query("SELECT * FROM doctors").then((results) => console.log(results.rows));
module.exports = db;
