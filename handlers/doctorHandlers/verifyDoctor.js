const jwt = require("jsonwebtoken");
require("dotenv").config();
const model = require("../../database/model");
const SECRET = process.env.JWT_SECRET;

function verifyUser(req, res, next) {
  const token = req.cookies.access_token;

  if (token) {
    const data = jwt.verify(token, SECRET);
    model.getDoctorProfile(data.id).then((doctor) => {
      req.doctor = doctor;
    });

    next();
  } else {
    const err = new Error("unauthorized");
    err.status = 403;
    next(err);
  }
}

module.exports = verifyUser;
