const  model = require("../../database/model");



function doctorLogin(req,res,next){

    const doctorObj = {email:null, msg:"", password:null}
    model.doctorLogin(req.email).then(doctor => {


        if(doctor){
          

            if(doctor.password==req.password){

                res.status(200).send(doctorObj);
                

            }

            else{
                doctorObj.password = false;
                res.status(200).send(doctorObj);
                
            }
        }

        else if(!doctor){
            doctorObj.email=false;
            doctorObj.msg = "Email is not found"
            res.status(404).send(doctorObj);
        }

       }

);



}

module.exports = doctorLogin ; 