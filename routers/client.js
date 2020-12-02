const express = require("express");
const server = express();
const router = express.Router();
const createAppointment = require("../handlers/clientHandlers/createAppointment");
const clientSignup = require("../handlers/clientHandlers/signup");
const clientLogin = require("../handlers/clientHandlers/login");

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

module.exports = router;
