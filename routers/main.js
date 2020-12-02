const express = require("express");
const server = express();
const router = express.Router();
const list = require("../handlers/mainHandlers/list");

router.get("/main/get-list", list);

module.exports = router;
