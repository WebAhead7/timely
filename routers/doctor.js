const express = require("express");
const server = express();
const router = express.Router();
const createCalendar = require("../handlers/doctorHandlers/createCalendar");
const doctorCalendar = require("../handlers/doctorHandlers/doctorCalendar");
const doctorClinic = require("../handlers/doctorHandlers/doctorClinic");

router.get("/doctor/", (req, res) => {
  console.log("CLIENT CALL");
  res.send("DOCTOR");
});

router.post("/doctor/:id/create-calendar", createCalendar);

router.get("/doctor/:id/doctor-calendar", doctorCalendar);

router.get("/doctor/:id/doctor-clinic", doctorClinic);

module.exports = router;
