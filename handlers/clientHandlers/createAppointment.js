const {
  getDoctorCalendar,
  updateDoctorCalendar,
} = require("../../database/model");

const createAppointment = (req, res, next) => {
  const { docid, clientid, day, hour } = req.params;

  getDoctorCalendar(docid).then((cal) => {
    const calendar = JSON.parse(cal[0].cal_data);
    const messageObject = { message: "", status: 200 };

    if (!checkSameDay(calendar[day], clientid)) {
      calendar[day].forEach((hours) => {
        if (hours.hour === +hour) {
          if (!hours.istaken) {
            console.log("ITS DONE");
            hours.istaken = true;
            hours.takenby = clientid;
            messageObject.message = "done";
            messageObject.status = 200;
            messageObject.day = day;
            messageObject.hour = hour;
          } else {
            console.log("ITS TAKEN");
            messageObject.message = "taken";
            messageObject.status = 400;
          }
        }
      });
    } else {
      messageObject.message =
        "you have an appointment this day, please choose another day";
      messageObject.status = 403;
    }

    // checkAllAppointments(calendar, clientid);
    const newCalendar = JSON.stringify(calendar);
    updateDoctorCalendar(docid, newCalendar)
      .then((results) => {})
      .catch((e) => console.log(e));
    req.params.msg = messageObject;

    next();
  });
};

const checkSameDay = (calendar, id) => {
  return calendar.some((hour) => hour.takenby === id);
};

const checkAllAppointments = (calendar, id) => {
  let hasAppointment = true;

  Object.keys(calendar).forEach((day) => {
    if (!hasAppointment) return;
    if (calendar[day] != "days") {
      hasAppointment = calendar[day].some((hour) => hour.takenby === id);
    }
  });

  return hasAppointment;
};

module.exports = createAppointment;
