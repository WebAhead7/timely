const express = require("express");
const server = express();
const router = express.Router();
const clientSignup = require("../handlers/clientHandlers/signup");
const clientLogin = require("../handlers/clientHandlers/login");

router.post("/client/signup", clientSignup);
router.post("/client/login", clientLogin);

module.exports = router;
