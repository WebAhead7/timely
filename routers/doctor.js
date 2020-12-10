const express = require("express");
const router = express.Router();

const doctorLogin = require("../handlers/doctorHandlers/login");
const doctorSignUp = require("../handlers/doctorHandlers/signup");

const createCalendar = require("../handlers/doctorHandlers/createCalendar");
const doctorCalendar = require("../handlers/doctorHandlers/doctorCalendar");
const doctorClinic = require("../handlers/doctorHandlers/doctorClinic");
const doctorProfile = require("../handlers/doctorHandlers/profile");
const verifyDoctor = require("../handlers/doctorHandlers/verifyDoctor");

router.post("/doctor/login", doctorLogin);

router.post("/doctor/signup", doctorSignUp);

router.get("/doctor/:id/create-calendar", verifyDoctor, createCalendar);

router.get("/doctor/:id/doctor-calendar", verifyDoctor, doctorCalendar);

router.get("/doctor/:id/doctor-clinic", doctorClinic);

router.get("/doctor/:id/doctor-profile", verifyDoctor, doctorProfile);

module.exports = router;
