const jwt = require("jsonwebtoken");
const model = require("../../database/model");

const verifiyClient = (req, res, next) => {
  const token = req.cookies.access_token;
  if (token) {
    const user = jwt.verify(token, process.env.SECRET);
    const email = user.email;
    model.getDataByEmail(email).then((data) => {
      res.cookies.client = data[0];
      next();
    });
  } else {
    const error = new Error("Unauthorized");
    error.status = 403;
    next(error);
  }
};

module.exports = verifiyClient;
