const model = require("../../database/model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;

function doctorSignUp(req, res, next) {
  const doctor = req.body;
  model
    .getDoctorsEmail()
    .then((emails) => {
      const emailsArr = emails.map((elem) => elem.email);
      const Valied = emailsArr.some((elem) => elem === doctor.email);
      const user = { email: doctor.email, isDoc: true };
      if (!Valied) {
        console.log("HEREs");
        bcrypt
          .genSalt(10)
          .then((salt) => bcrypt.hash(doctor.pass, salt))
          .then((hash) => {
            doctor.pass = hash;
            model
              .doctorSignUp(doctor)
              .then((results) => {
                const id = results[0].id;
                const token = jwt.sign(user, SECRET, {
                  expiresIn: "1h",
                });
                res.cookie("access_token", token);
                res
                  .status(200)
                  .send({ msg: "done", auth: true, id: id, isDoc: true });
              })
              .catch(next);
          })
          .catch((err) => console.log("hashing ", err));
        console.log("hashed password", doctor.pass);
      } else {
        res.status(404).send({ msg: "Invalied Email", auth: false });
      }
    })
    .catch(next);
}

module.exports = doctorSignUp;
