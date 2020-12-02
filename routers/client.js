const express = require("express");
const server = express();
const router = express.Router();
const createAppointment = require("../handlers/clientHandlers/createAppointment");

router.get("/client", (req, res) => {
  console.log("CLIENT CALL");
  res.send("CLIENT");
});

router.get(
  "/client/create-appointment/:docid/:clientid/:day/:hour",
  createAppointment
);

module.exports = router;
