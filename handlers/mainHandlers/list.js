const { getList } = require("../../database/model");

const list = (req, res, next) => {
  getList().then((data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send("Something went wrong");
    }
  });
};

module.exports = list;
