const db = require("./connection");

const list = () => {
  return db.query(`select * from doctors`).then((result) => result.rows);
};

const doctorCalendar = (id) => {
  return db
    .query(
      `
          select doctors.firstname, doctors.lastname, doctors.imgUrl, doctors.title, doctors.dsc from doctors where doctors.id = ${id} right join calendar on doctors.id = calendar.doc_id`
    )
    .then((result) => result.rows);
};

const getDoctorCale = (id) => {
  return db
    .query(`select * from calendar where calendar.doc_id = ${id} `)
    .then((cal) => cal.rows);
};

const clientProfile = (id) => {
  return db
    .query(`select * from clients where clients.id = ${id}`)
    .then((result) => result.rows);
};

const createDoctorCalendar = (id, cal) => {
  return db.query(`insert into calendar (cal_data, doc_id) values($1, $2)`, [
    cal,
    id,
  ]);
};

// insert into doctors (firstname, lastname, email, title, pass, dsc, imgUrl) values('alaa','bashiyi','alaabashiy@gmail.com','skin','321321','doccctor me','linktoimage');

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

module.exports = {
  list,
  doctorCalendar,
  clientProfile,
  getDoctorCale,
  createDoctorCalendar,
  clientLogin,
  getClientsEmails,
  getPasswordByEmail,
  clientSignup,
};
