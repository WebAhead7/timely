const express = require("express");
const clientRouter = require("./routers/client");
const doctorRouter = require("./routers/doctor");
const mainRouter = require("./routers/main");
const cookieParser = require("cookie-parser");
const db = require("./database/connection");
const server = express();
const bodyParser = require("body-parser");
const verifiyClient = require("./handlers/clientHandlers/verifiyClient");
const verifiyDoctor = require("./handlers/doctorHandlers/verifyDoctor");

const cors = require("cors");

const whitelist = ["http://localhost:3000", "http://localhost:4000", "*"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

server.use(cors());
server.use(cookieParser());
const port = process.env.PORT || 4000;
server.use(express.json());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.all(/client/, clientRouter);
server.all(/doctor/, doctorRouter);
server.all(/main/, mainRouter);

server.listen(port, () => {
  console.log(`we're online at ${port}`);
});
