const model = require("../../database/model");

function doctorSignUp(req, res, next) {
  const doctor = req.body;
  model
    .getDoctorsEmail()
    .then((emails) => {
      console.log("11111", emails);
      const emailsArr = emails.map((elem) => elem.email);
      const Valied = emailsArr.some((elem) => elem === doctor.email);

      console.log("kkkkk", Valied);
      if (!Valied) {
        console.log("im in valid");
        model.doctorSignUp(doctor).catch(next);
        res.status(200).send("done");
      } else {
        res.status(404).send({ msg: "Invalied Email" });
      }
    })
    .catch(next);
}

module.exports = doctorSignUp;
