const Register = require('../models/register');
//const uuid = require('uuid');

const handleError = function(err) {
    console.error(err);
    // handle your error
};

exports.Register = async (req, res) => {
    const stdID = req.body.stdID;
    const name = req.body.name;
    console.log(stdID);
    console.log(name);
    const register = new Register({stdID: stdID, name: name});
    register.save(function (err) {
        if (err) return handleError(err);
        // saved!
        res.status(200).send({message: 'success', error: err});
    });

    const [registerResult] = await Register.find();
    console.log('registerRusult');
    console.log(registerResult);
    
    // TODO : get answers from mongodb,
    // check answers coming from frontend and return score to frontend
}

exports.CheckUsers = async (req, res) => {

    const registerResult = await Register.find();
    res.status(200).send({message: 'success', registerResult: registerResult});

    // TODO : get answers from mongodb,
    // check answers coming from frontend and return score to frontend
}

exports.DeleteUsers = async (req, res) => {
    await Register.remove({_id : req.body.source});
    res.status(200).send({message: 'success', registerResult: "delete successfully"});
     
    // TODO : get answers from mongodb,
    // check answers coming from frontend and return score to frontend
}

exports.UpdateUserData = async (req, res) => {
    console.log(req.body.stdID)
    await Register.update({_id : req.body.id},{ $set : { stdID : req.body.stdID , name : req.body.name }});
    res.status(200).send({message: 'success', registerResult: "update successfully"});
     
    // TODO : get answers from mongodb,
    // check answers coming from frontend and return score to frontend
}