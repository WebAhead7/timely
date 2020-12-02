const express = require("express");
const server = express();
const router = express.Router();
const createAppointment = require("../handlers/clientHandlers/createAppointment");
const clientSignup = require("../handlers/clientHandlers/signup");
const clientLogin = require("../handlers/clientHandlers/login");
const clientProfile = require("../handlers/clientHandlers/profile");

router.get("/client", (req, res) => {
  console.log("CLIENT CALL");
  res.send("CLIENT");
});

router.get(
  "/client/create-appointment/:docid/:clientid/:day/:hour",
  createAppointment
);

router.post("/client/signup", clientSignup);
router.post("/client/login", clientLogin);

router.get("/client/:id/client-profile", clientProfile);

module.exports = router;
