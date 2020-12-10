const model = require("../../database/model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;

function doctorLogin(req, res, next) {
  const doctorObj = { email: "", msg: "", pass: "" };
  model
    .doctorLogin(req.body.email)
    .then((doctor) => {
      if (doctor.length != 0) {
        bcrypt.compare(req.body.pass, doctor[0].pass).then((match) => {
          const email = doctor[0].email;
          const user = { email: email, isDoc: true };
          if (match) {
            console.log("doctor data", doctor[0]);
            console.log("doctor login", req.body.email);
            const token = jwt.sign(user, SECRET, {
              expiresIn: "1h",
            });
            doctorObj.msg = "Welcome";
            doctorObj.auth = true;
            doctorObj.id = doctor[0].id;
            doctorObj.isDoc = true;
            doctorObj.token = token;
            res.cookie("access_token", token);
            res.status(200).send(doctorObj);
          } else {
            doctorObj.pass = false;
            doctorObj.msg = "Incorrect Password";
            doctorObj.auth = false;
            res.status(404).send(doctorObj);
          }
        });
      } else {
        doctorObj.email = false;
        doctorObj.auth = false;
        doctorObj.msg = "Email is not found";
        res.status(404).send(doctorObj);
      }
    })
    .catch(next);
}

module.exports = doctorLogin;
