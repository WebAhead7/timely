const db = require("./connection");

function getDoctorsEmail() {
  return db.query("SELECT email FROM doctors").then((data) => data.rows);
}

const getList = () => {
  return db.query(`select * from doctors`).then((result) => result.rows);
};

function doctorLogin(email) {
  return db
    .query(`SELECT email,pass,id FROM doctors WHERE email = '${email}'`)
    .then((result) => result.rows);
}

const getDoctorClinic = (id) => {
  return db
    .query(
      `
          select doctors.id ,doctors.firstname, doctors.lastname, doctors.imgUrl, doctors.title, doctors.dsc, calendar.cal_data from doctors  inner join calendar on doctors.id = calendar.doc_id where doctors.id = ($1)`,
      [id]
    )
    .then((result) => {
      return result.rows;
    });
};

const updateDoctorCalendar = (id, cal) => {
  return db
    .query(
      `update calendar set cal_data = ($1) where calendar.doc_id = ($2) returning cal_data`,
      [cal, id]
    )
    .then((results) => {
      return results.rows;
    });
};

const getDoctorCalendar = (id) => {
  return db
    .query(`select * from calendar where calendar.doc_id = ${id} `)
    .then((cal) => cal.rows);
};

const getClientProfile = (id) => {
  return db
    .query(`select * from clients where clients.id = ($1)`, [id])
    .then((result) => result.rows);
};
const getDoctorProfile = (id) => {
  return db
    .query(`select * from doctors where doctors.id = ${id}`)
    .then((result) => result.rows);
};

const createDoctorCalendar = (id, cal) => {
  return db
    .query(
      `insert into calendar (cal_data, doc_id) values($1, $2) returning cal_data`,
      [cal, id]
    )
    .then((result) => result);
};

// insert into doctors (firstname, lastname, email, title, pass, dsc, imgUrl) values('alaa','bashiyi','alaabashiy@gmail.com','skin','321321','doccctor me','linktoimage');

//clientSignup
function clientSignup(obj) {
  const { firstname, lastname, email, pass, imgUrl } = obj;
  return db
    .query(
      "INSERT INTO clients (firstname,lastname,email,pass,imgUrl) VALUES ($1,$2,$3,$4,$5) returning id",
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
    .query(`SELECT * FROM clients WHERE email='${email}'`)
    .then((password) => password.rows);
}

function getDataByEmail(email) {
  return db
    .query(`SELECT * FROM clients WHERE email= ($1)`, [email])
    .then((data) => data.rows);
}

function doctorSignUp(doctor) {
  return db
    .query(
      "INSERT INTO doctors(firstname,lastname,email,title,pass, dsc,imgUrl ) VALUES($1 , $2 , $3 , $4 ,$5, $6, $7) returning id",
      [
        doctor.firstname,
        doctor.lastname,
        doctor.email,
        doctor.title,
        doctor.pass,
        doctor.dsc,
        doctor.imgUrl,
      ]
    )
    .then((result) => result.rows);
}

function addAppointment(id, app) {
  return db
    .query(
      `update clients set appointments = ($1) where clients.id = ($2) returning appointments`,
      [app, id]
    )
    .then((appointment) => appointment.rows);
}

module.exports = {
  getList,
  updateDoctorCalendar,
  getDoctorClinic,
  getClientProfile,
  getDoctorProfile,
  getDoctorCalendar,
  createDoctorCalendar,
  getClientsEmails,
  getPasswordByEmail,
  clientSignup,
  getDoctorsEmail,
  doctorLogin,
  doctorSignUp,
  getDataByEmail,
  addAppointment,
};
