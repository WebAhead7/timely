const express = require("express");
const router = express.Router();

router.get("/doctor", (req, res) => {
  console.log("CLIENT CALL");
  res.send("DOCTOR");
});

router.get("/doctor/test", (req, res) => {
  console.log("DOCTOR CALL");
  res.send("DOCTOR");
});

module.exports = router;
