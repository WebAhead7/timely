const { getClientProfile } = require("../../database/model");

const clientProfile = (req, res, next) => {
  const id = req.params.id;
  getClientProfile(id).then((cal) => {
    const data = cal[0];
    if (cal) {
      res.status(200).send(data);
    } else {
      res.status(400).send("Something went wrong");
    }
  });
};

module.exports = clientProfile;
