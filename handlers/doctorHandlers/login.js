const model = require("../../database/model");

function doctorLogin(req, res, next) {
  const doctorObj = { email: "", msg: "", pass: "" };
  model
    .doctorLogin(req.body.email)
    .then((doctor) => {
      if (doctor.length != 0) {
        if (`${doctor[0].pass}` === req.body.pass) {
          doctorObj.msg = "Welcome";
          doctorObj.auth = true;
          doctorObj.id = doctor[0].id;
          doctorObj.isDoc = true;
          res.status(200).send(doctorObj);
        } else {
          doctorObj.pass = false;
          doctorObj.msg = "Incorrect Password";
          doctorObj.auth = false;
          res.status(404).send(doctorObj);
        }
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
