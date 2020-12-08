const {
  getDoctorCalendar,
  createDoctorCalendar,
} = require("../../database/model");

const calendar = {
  sunday: [
    { hour: 9, istaken: false, takenby: null },
    { hour: 10, istaken: false, takenby: null },
    { hour: 11, istaken: false, takenby: null },
    { hour: 12, istaken: false, takenby: null },
    { hour: 13, istaken: false, takenby: null },
    { hour: 14, istaken: false, takenby: null },
    { hour: 15, istaken: false, takenby: null },
    { hour: 16, istaken: false, takenby: null },
    { hour: 17, istaken: false, takenby: null },
    { hour: 18, istaken: false, takenby: null },
  ],
  monday: [
    { hour: 9, istaken: false, takenby: null },
    { hour: 10, istaken: false, takenby: null },
    { hour: 11, istaken: false, takenby: null },
    { hour: 12, istaken: false, takenby: null },
    { hour: 13, istaken: false, takenby: null },
    { hour: 14, istaken: false, takenby: null },
    { hour: 15, istaken: false, takenby: null },
    { hour: 16, istaken: false, takenby: null },
    { hour: 17, istaken: false, takenby: null },
    { hour: 18, istaken: false, takenby: null },
  ],
  tuesday: [
    { hour: 9, istaken: false, takenby: null },
    { hour: 10, istaken: false, takenby: null },
    { hour: 11, istaken: false, takenby: null },
    { hour: 12, istaken: false, takenby: null },
    { hour: 13, istaken: false, takenby: null },
    { hour: 14, istaken: false, takenby: null },
    { hour: 15, istaken: false, takenby: null },
    { hour: 16, istaken: false, takenby: null },
    { hour: 17, istaken: false, takenby: null },
    { hour: 18, istaken: false, takenby: null },
  ],
  wednesday: [
    { hour: 9, istaken: false, takenby: null },
    { hour: 10, istaken: false, takenby: null },
    { hour: 11, istaken: false, takenby: null },
    { hour: 12, istaken: false, takenby: null },
    { hour: 13, istaken: false, takenby: null },
    { hour: 14, istaken: false, takenby: null },
    { hour: 15, istaken: false, takenby: null },
    { hour: 16, istaken: false, takenby: null },
    { hour: 17, istaken: false, takenby: null },
    { hour: 18, istaken: false, takenby: null },
  ],
  thursday: [
    { hour: 9, istaken: false, takenby: null },
    { hour: 10, istaken: false, takenby: null },
    { hour: 11, istaken: false, takenby: null },
    { hour: 12, istaken: false, takenby: null },
    { hour: 13, istaken: false, takenby: null },
    { hour: 14, istaken: false, takenby: null },
    { hour: 15, istaken: false, takenby: null },
    { hour: 16, istaken: false, takenby: null },
    { hour: 17, istaken: false, takenby: null },
    { hour: 18, istaken: false, takenby: null },
  ],
  friday: [
    { hour: 9, istaken: false, takenby: null },
    { hour: 10, istaken: false, takenby: null },
    { hour: 11, istaken: false, takenby: null },
    { hour: 12, istaken: false, takenby: null },
    { hour: 13, istaken: false, takenby: null },
    { hour: 14, istaken: false, takenby: null },
    { hour: 15, istaken: false, takenby: null },
    { hour: 16, istaken: false, takenby: null },
    { hour: 17, istaken: false, takenby: null },
    { hour: 18, istaken: false, takenby: null },
  ],
  saturday: [
    { hour: 9, istaken: false, takenby: null },
    { hour: 10, istaken: false, takenby: null },
    { hour: 11, istaken: false, takenby: null },
    { hour: 12, istaken: false, takenby: null },
    { hour: 13, istaken: false, takenby: null },
    { hour: 14, istaken: false, takenby: null },
    { hour: 15, istaken: false, takenby: null },
    { hour: 16, istaken: false, takenby: null },
    { hour: 17, istaken: false, takenby: null },
    { hour: 18, istaken: false, takenby: null },
  ],
  days: [],
};

const createCalendar = (req, res, next) => {
  // const days = req.body;
  const id = req.params.id;
  let isExist = true;

  getDoctorCalendar(id).then((cal) => {
    cal.length !== 0 ? (isExist = false) : (isExist = true);

    if (isExist) {
      createDoctorCalendar(id, JSON.stringify(calendar))
        .then((cal) => {
          console.log(cal);
          res.status(201).send("Calendar created");
        })
        .catch((e) => console.log(e));
    } else {
      res.status(301).send("Already created!");
    }
  });
};

module.exports = createCalendar;
