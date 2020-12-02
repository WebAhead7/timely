
const db = require("../database/connection");

function doctorSignUp(doctor) {

  return db.query("INSERT INTO doctors(firstname,lastname,email,title,pass, dsc,imgUrl )  VALUES($1 , $2 , $3 , $4 ,$5, $6, $7)", Object.values(doctor)).then((result) => {
    console.log(data=>data.rows);
  });

}

function getDoctorsEmail(){

   return db.query("SELECT email FROM doctors").then(data=> data.rows);
}


function doctorLogin(email){
  console.log("model email", email);
  return  db.query(`SELECT email,pass FROM doctors WHERE email = '${email}'`).then(result=>result.rows);

}

module.exports = {doctorSignUp, getDoctorsEmail, doctorLogin};  