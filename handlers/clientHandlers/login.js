const model = require("../../database/model");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const SECRET = "GUN8F27IVO";

dotenv.config();
function clientLogin(req, res, next) {
  const obj = {
    msg: "",
    email: "",
    pass: "",
    auth: false,
  };
  const { email, pass } = req.body;
  console.log(email, pass);
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
          bcrypt.compare(pass, password[0].pass).then((match) => {
            const user = { email: email, isDoc: false };
            if (match) {
              const access_token = jwt.sign(user, SECRET);
              obj.msg = "Welcome";
              obj.email = true;
              obj.pass = true;
              obj.auth = true;
              obj.id = password[0].id;
              obj.firstname = password[0].firstname;
              obj.lastname = password[0].lastname;
              obj.isDoc = false;
              obj.token = access_token;
              res.cookie("access_token", access_token);
              res.status(200).send(obj);
            } else {
              obj.msg = "incorrect password";
              obj.email = true;
              obj.pass = false;
              res.status(404).send(obj);
            }
          });
        });
      }
    })
    .catch(next);
}

module.exports = clientLogin;
