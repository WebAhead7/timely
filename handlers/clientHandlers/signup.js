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
          .then((returnedData) => {
            const id = returnedData[0].id;
            res.status(200).send({
              msg: "Email Created Successfully",
              auth: true,
              id: id,
              isDoc: false,
            });
            next();
          })
          .catch(next);
      } else {
        res.status(404).send({ msg: "invalid email", auth: false });
      }
    })
    .catch(next);
}

module.exports = clientSignup;
