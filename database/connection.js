const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const connectionString =
  process.env.DATABASE_URL ||
  "postgres://alaabashiyi:321321@localhost:5432/timely_db";

const db = new pg.Pool({ connectionString });

// db.query("SELECT * FROM doctors").then((results) => console.log(results.rows));
module.exports = db;
