const model = require("../../database/model");

function addAppointment(req, res, next) {
  const { docid, clientid, day, hour, msg } = req.params;
  const appointmentobj = { docid, hour, day };
  model
    .getClientProfile(clientid)
    .then((data) => {
      const app = JSON.parse(data.appointments);
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
