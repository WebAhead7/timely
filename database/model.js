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

module.exports = {
  list,
  doctorCalendar,
  clientProfile,
  getDoctorCale,
  createDoctorCalendar,
};

// insert into doctors (firstname, lastname, email, title, pass, dsc, imgUrl) values('alaa','bashiyi','alaabashiy@gmail.com','skin','321321','doccctor me','linktoimage');
