const model = require("../../database/model");

function clientLogin(req, res, next) {
  console.log("i am in the login handler");
  const obj = {
    message: "",
    email: "",
    password: "",
  };

  const { email, pass } = req.body;
  model
    .getClientsEmails()
    .then((emails) => {
      const emailsArr = emails.map((obj) => obj.email);
      if (!emailsArr.find((em) => em === email)) {
        console.log("no email found");
        obj.message = "email doesn't exists";
        obj.email = false;
        res.send(obj);
        next();
      } else {
        model.getPasswordByEmail(email).then((password) => {
          console.log("PASSSS:", password);
          if (pass === password[0].pass) {
            obj.message = "Welcome";
            obj.email = true;
            obj.password = true;
            res.send(obj);
            next();
          } else {
            obj.message = "incorrect password";
            obj.email = true;
            obj.password = false;
            res.send(obj);
            next();
          }
        });
      }
    })
    .catch(next);
}

module.exports = clientLogin;
