const db = require("./connection");

//clientSignup
function clientSignup(obj) {
  const { firstname, lastname, email, pass, imgUrl } = obj;
  return db
    .query(
      "INSERT INTO clients (firstname,lastname,email,pass,imgUrl) VALUES ($1,$2,$3,$4,$5)",
      [firstname, lastname, email, pass, imgUrl]
    )
    .then((data) => data.rows);
}

//getClientsEmails
function getClientsEmails() {
  return db
    .query("SELECT email FROM clients")
    .then((clientsEmails) => clientsEmails.rows);
}

//getPasswordByEmail from DB
function getPasswordByEmail(email) {
  return db
    .query(`SELECT pass FROM clients WHERE email='${email}'`)
    .then((password) => password.rows);
}

module.exports = { clientSignup, getClientsEmails, getPasswordByEmail };
