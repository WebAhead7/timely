const model = require("../../database/model");

function doctorLogin(req, res, next) {
  const doctorObj = { email: "", msg: "", password: "" };
  console.log("email", req.body.email);
  model
    .doctorLogin(req.body.email)
    .then((doctor) => {
      console.log("login data", doctor);

      if (doctor.length != 0) {
        if (`${doctor[0].pass}` === req.body.pass) {
          res.status(200).send(doctorObj);
        } else {
          doctorObj.password = false;
          res.status(200).send(doctorObj);
        }
      } else {
        doctorObj.email = false;
        doctorObj.msg = "Email is not found";
        res.status(404).send(doctorObj);
      }
    })
    .catch(next);
}

module.exports = doctorLogin;
