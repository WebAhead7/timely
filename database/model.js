
const db = require("./database/connection");

function doctorSignUp(doctor) {

  return db.query("INSERT INTO doctors(firstname,lastname,email,title,pass, dsc,imgUrl )  VALUES($1 , $2 , $3 , $4 ,$5, $6, $7)", Object.values(doctor)).then((result) => {
    console.log(result=>result.rows);
  });

}

function getDoctorsEmail(){

   return db.query("SELECT email FROM doctors");
}

function doctorLogin(email){

  return  db.query(`SELECT * WHERE email=${email}`);

}

module.exports = {doctorSignUp, getDoctorsEmail, doctorLogin};  