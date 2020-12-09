const express = require("express");
const server = express();
const router = express.Router();
const createAppointment = require("../handlers/clientHandlers/createAppointment");
const clientSignup = require("../handlers/clientHandlers/signup");
const clientLogin = require("../handlers/clientHandlers/login");
const clientProfile = require("../handlers/clientHandlers/profile");
const verifiyClient = require("../handlers/clientHandlers/verifiyClient");
const addAppointment = require("../handlers/clientHandlers/addAppointment");

router.get(
  "/client/create-appointment/:docid/:clientid/:day/:hour",
  verifiyClient,

  createAppointment,
  addAppointment
);

router.post("/client/signup", clientSignup);
router.post("/client/login", clientLogin);

router.get("/client/:id/client-profile", verifiyClient, clientProfile);

module.exports = router;
