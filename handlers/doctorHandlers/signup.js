

const  model = require("../../database/model");



function doctorSignUp(req,res,next){
    const doctor = req.body; 
    model.getDoctorsEmail().then(emails=> { 

        const emailsArr = emails.map(elem => elem.email);
        const Valied = emailsArr.every(elem=> {
            elem !== doctor.email;
        })

        if(Valied){

            model.doctorSignUp(doctor).catch(next);
            res.status(200);
            
        }

        else {
        
        res.status(404).send({msg: "Invalied Email"})

        }

    }).catch(next);


}



module.exports = doctorSignUp; 
