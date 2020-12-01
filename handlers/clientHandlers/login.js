const db = require("../../database/connection");
const model = require("../../database/model");

function clientLogin(req, res, next) {
  const obj = {
    message,
    email,
    password,
  };

  const { email, pass } = req.body;
  model.getClientsEmails().then((emails) => {
    const emailsArr = emails.map((obj) => obj.email);
    if (!emailsArr.find((em) => em === email)) {
      obj.message = "email doesn't exists";
      obj.email = false;
      res.send(obj);
    } else {
      model.getPasswordByEmail(email).then((password) => {
        if (pass === password.pass) {
          obj.message = "incorrect password";
          obj.password = false;
          res.send(obj);
        } else {
          obj.message = "incorrect password";
          obj.email = false;
          res.send(obj);
        }
      });
    }
  });
}

module.exports = clientLogin;
