const { getClientProfile } = require("../../database/model");

const clientProfile = (req, res, next) => {
  const id = req.params.id;
  getClientProfile(id).then((cal) => {
    const data = cal[0];
    if (cal.length !== 0) {
      res.status(200).send(data);
    } else {
      res.status(404).send("Not found");
    }
  });
};

module.exports = clientProfile;
