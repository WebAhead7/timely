const jwt = require("jsonwebtoken");
const model = require("../../database/model");

const verifiyClient = (req, res, next) => {
  // const token = req.cookies.access_token;
  const token = req.headers["access_token"];

  if (token) {
    const user = jwt.verify(token, process.env.SECRET);
    const email = user.email;
    console.log("USER", user);

    model
      .getDataByEmail(email)
      .then((data) => {
        if (data) {
          req.params.isVerified = true;
          next();
        }
      })
      .catch((e) => console.log(e));
  } else {
    const error = new Error("Unauthorized");
    error.status = 403;
    next(error);
  }
};

module.exports = verifiyClient;
