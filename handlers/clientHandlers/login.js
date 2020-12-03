const model = require("../../database/model");

function clientLogin(req, res, next) {
  const obj = {
    msg: "",
    email: "",
    pass: "",
    auth: false,
  };
  const { email, pass } = req.body;
  model
    .getClientsEmails()
    .then((emails) => {
      const emailsArr = emails.map((obj) => obj.email);
      if (!emailsArr.find((em) => em === email)) {
        obj.msg = "email doesn't exists";
        obj.email = false;
        res.status(404).send(obj);
      } else {
        model.getPasswordByEmail(email).then((password) => {
          console.log(password);
          if (pass === password[0].pass) {
            obj.msg = "Welcome";
            obj.email = true;
            obj.pass = true;
            obj.auth = true;
            obj.id = password[0].id;
            obj.isDoc = false;
            res.status(200).send(obj);
          } else {
            obj.msg = "incorrect password";
            obj.email = true;
            obj.pass = false;
            res.status(404).send(obj);
          }
        });
      }
    })
    .catch(next);
}

module.exports = clientLogin;
