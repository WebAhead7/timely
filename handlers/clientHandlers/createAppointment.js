const {
  getDoctorCalendar,
  updateDoctorCalendar,
} = require("../../database/model");

const createAppointment = (req, res, next) => {
  const { docid, clientid, day, hour } = req.params;

  getDoctorCalendar(docid).then((cal) => {
    const calendar = JSON.parse(cal[0].cal_data);
    const messageObject = { message: "", status: 200 };

    calendar[day].forEach((hours) => {
      if (hours.hour === +hour) {
        if (!hours.istaken) {
          hours.istaken = true;
          hours.takenby = clientid;
          messageObject.message = "done";
          messageObject.status = 200;
        } else {
          messageObject.message = "taken";
          messageObject.status = 400;
        }
      }
    });

    // console.log(calendar);
    checkAllAppointments(calendar);
    // const newCalendar = JSON.stringify(calendar);

    // updateDoctorCalendar(docid, newCalendar).catch((e) => console.log(e));

    res.status(messageObject.status).send(messageObject.message);
  });
};

const checkAllAppointments = (calendar) => {
  let hasAppointment;
  Object.keys(calendar).forEach((day) => {
    if (calendar[day] != "days") {
      hasAppointment = calendar[day].every((hour) => hour.istaken === false);
    }
  });

  console.log(hasAppointment);
  return hasAppointment;
};

module.exports = createAppointment;
