const model = require("../../database/model");

function clientSignup(req, res, next) {
  const clientObj = req.body;
  const clientEmail = clientObj.email;
  model
    .getClientsEmails()
    .then((emails) => {
      const emailsArr = emails.map((objs) => objs.email);
      const valid = emailsArr.every((email) => email !== clientEmail);
      if (valid) {
        model
          .clientSignup(clientObj)
          .then(() => {
            res.status(200);
            next();
          })
          .catch(next);
      } else {
        res.status(404).send({ message: "invalid email" });
      }
    })
    .catch(next);
}

module.exports = clientSignup;
