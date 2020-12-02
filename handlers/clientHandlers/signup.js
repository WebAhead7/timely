const model = require("../../database/model");

function clientSignup(req, res, next) {
  const clientObj = req.body;
  const clientEmail = clientObj.email;
  model
    .getClientsEmails()
    .then((emails) => {
      const emailsArr = emails.map((obj) => obj.email);
      const valid = emailsArr.some((email) => email === clientEmail);
      if (!valid) {
        model
          .clientSignup(clientObj)
          .then(() => {
            res.status(200).send({ msg: "Email Created Successfully" });
            next();
          })
          .catch(next);
      } else {
        res.status(404).send({ msg: "invalid email" });
      }
    })
    .catch(next);
}

module.exports = clientSignup;
