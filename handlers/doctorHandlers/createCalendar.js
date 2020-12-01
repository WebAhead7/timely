const { calendar } = require("./calendar");
const { getDoctorCale, createDoctorCalendar } = require("../../database/model");

const createCalendar = (req, res, next) => {
  let isExist;
  getDoctorCale(id).then((cal) => {
    call ? (isExist = true) : (isExist = false);
  });

  if (isExist) {
    createDoctorCalendar(id, calendar).catch((e) => console.log(e));
  }
};

module.exports = createCalendar;
