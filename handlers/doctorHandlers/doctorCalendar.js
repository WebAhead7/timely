const { getDoctorCalendar } = require("../../database/model");

const doctorCalendar = (req, res, next) => {
  const id = req.params.id;

  getDoctorCalendar(id)
    .then((cal) => {
      const data = cal[0];

      data.cal_data = JSON.parse(data.cal_data);
      console.log(data);
      if (cal) {
        res.status(200).send(data);
      } else {
        res.status(400).send("Something went wrong");
      }
    })
    .catch((e) => console.log(e));
};

module.exports = doctorCalendar;
