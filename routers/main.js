const express = require("express");
const server = express();
const router = express.Router();
const list = require("../handlers/mainHandlers/list");
const logOut = require("../handlers/mainHandlers/logout");

router.get("/main/get-list", list);
router.get("/main/logout", logOut);

module.exports = router;
