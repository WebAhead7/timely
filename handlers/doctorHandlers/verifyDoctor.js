const jwt = require("jsonwebtoken");
require("dotenv").config();
const model = require("../../database/model");
// const SECRET = process.env.JWT_SECRET;
const SECRET = "GUN8F27IVO";

function verifyUser(req, res, next) {
  // const token = req.cookies.access_token;
  const token = req.header("authorization");

  if (token) {
    const data = jwt.verify(token, SECRET);

    if (data.isDoc) {
      console.log("YES");
      next();
    } else {
      console.log("NO");
      res.status(403).send("Unauthorized");
    }
  } else {
    const err = new Error("unauthorized");
    err.status = 403;
    next(err);
  }
}

module.exports = verifyUser;
