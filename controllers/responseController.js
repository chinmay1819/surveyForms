const express = require("express");

const responseModel=require('../models/response')
const formModel=require('../models/form')

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



//FOR GETTING RESPONSE
const getResponse = async (req, res) => {
    let qid=req.body.questionId;
    try {
      const response = await responseModel.find({
        userId: req.userId,
        questionId:req.body.questionId,
        formId:req.body.formId
      });
      const questionsArray=await formModel.find();

      
    //   res.status(200).json(response);

    res.status(200).json({
        response,question
    });

    
      
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong..." });
    }
  };









module.exports= {
    createResponse,
    getResponse
}







