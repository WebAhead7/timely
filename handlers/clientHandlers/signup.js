const model = require("../../database/model");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

function clientSignup(req, res, next) {
  const clientObj = req.body;

  const clientEmail = clientObj.email;
  model
    .getClientsEmails()
    .then((emails) => {
      const emailsArr = emails.map((obj) => obj.email);
      const valid = emailsArr.some((email) => email === clientEmail);
      if (!valid) {
        const user = { email: clientEmail, isDoc: false };
        const access_token = jwt.sign(user, process.env.SECRET);
        bcrypt
          .genSalt(10)
          .then((salt) => bcrypt.hash(clientObj.pass, salt))
          .then((hash) => {
            clientObj.pass = hash;
            model
              .clientSignup(clientObj)
              .then((returnedData) => {
                const id = returnedData[0].id;
                res.cookie("access_token", access_token);
                res.status(200).send({
                  msg: "Email Created Successfully",
                  auth: true,
                  id: id,
                  isDoc: false,
                  token: access_token,
                });
                next();
              })
              .catch(next);
          });
      } else {
        res.status(404).send({ msg: "invalid email", auth: false });
      }
    })
    .catch(next);
}

module.exports = clientSignup;
