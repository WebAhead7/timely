const { getDoctorClinic } = require("../../database/model");

const doctorClinic = (req, res, next) => {
  const id = req.params.id;
  getDoctorClinic(id).then((cal) => {
    const data = cal.filter((a) => +a.id === +id)[0];
    data.cal_data = JSON.parse(data.cal_data);

    if (cal) {
      res.status(200).send(data);
    } else {
      res.status(400).send("Something went wrong");
    }
  });
};

module.exports = doctorClinic;
