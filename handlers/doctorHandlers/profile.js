const { getDoctorProfile } = require("../../database/model");

const doctorProfile = (req, res, next) => {
  const id = req.params.id;
  getDoctorProfile(id).then((cal) => {
    const data = cal[0];
    console.log(data);

    if (cal) {
      res.status(200).send(data);
    } else {
      res.status(400).send("Something went wrong");
    }
  });
};

module.exports = doctorProfile;
