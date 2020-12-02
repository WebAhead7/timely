const express = require("express");
const router = express.Router();
const doctorLogin = require("../handlers/doctorHandlers/login");
const doctorSignUp = require("../handlers/doctorHandlers/signup");

router.post("/doctor/login", doctorLogin);

router.post("/doctor/signup",doctorSignUp);

module.exports = router;
