const model = require("../../database/model");

function addAppointment(req, res, next) {
  const { docid, clientid, day, hour, msg } = req.params;
  const appointmentobj = { docid: docid, hour: hour, day: day };
  model
    .getClientProfile(clientid)
    .then((data) => {
      let app;
      app = JSON.parse(data[0].appointments);
      if (!app) {
        app = [];
      }
      app.push(appointmentobj);
      model
        .addAppointment(clientid, JSON.stringify(app))
        .then((appointment) => {
          if (appointment) {
            res.status(msg.status).send(msg.message);
          } else {
            res
              .status(404)
              .send("something went wrong with creating apoimtment");
          }
        })
        .catch(next);
    })
    .catch(next);
}

module.exports = addAppointment;
