const model = require("../../database/model");

function doctorSignUp(req, res, next) {
  const doctor = req.body;
  model
    .getDoctorsEmail()
    .then((emails) => {
      const emailsArr = emails.map((elem) => elem.email);
      const Valied = emailsArr.some((elem) => elem === doctor.email);

      if (!Valied) {
        model
          .doctorSignUp(doctor)
          .then((results) => {
            const id = results[0].id;
            res
              .status(200)
              .send({ msg: "done", auth: true, id: id, isDoc: true });
          })
          .catch(next);
      } else {
        res.status(404).send({ msg: "Invalied Email", auth: false });
      }
    })
    .catch(next);
}

module.exports = doctorSignUp;
