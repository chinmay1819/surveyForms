const express = require("express");

const responseModel=require('../models/response')

//FOR CREATING A RESPONSE TO THE FORM...
const createResponse = async (req, res) => {

responseModel.create( {  'responseContent': req.body.responseContent, 
                        'userId':req.userId,
                        'formId':req.body.formId,
                        'questionId':req.body.questionId
                    }, 
    (err, result ) => {
        if (err) {
            console.log('error', err)
            res.send('Something went wrong...')
        } else {
            res.status(200).send(result);
        }
    })


};


module.exports=createResponse;