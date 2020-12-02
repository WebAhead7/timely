const express = require("express");
const clientRouter = require("./routers/client");
const doctorRouter = require("./routers/doctor");
const mainRouter = require("./routers/main");
const db = require("./database/connection");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 4000;

server.use(cors());
server.use(express.json());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.all(/client/, clientRouter);
server.all(/doctor/, doctorRouter);
server.all(/main/, mainRouter);

server.listen(port, () => {
  console.log(`we're online at ${port}`);
});
