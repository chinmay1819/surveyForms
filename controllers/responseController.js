const express = require("express");

const responseModel=require('../models/response')
const formModel=require('../models/form');


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
    let fid=req.body.formId;
    try {
      const response = await responseModel.find({
        userId: req.userId,
        questionId:req.body.questionId,
        formId:req.body.formId
      });
      
      const requiredForm=await formModel.findById(fid);
    
    res.status(200).json({
        response
    });

    
      
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong..." });
    }
  };



  // for getting all responses of a question with qid and form id 
  












//FOR DELETING A RESPONSE BY USING ID 
const deleteResponse = async (req, res) => {
  const id = req.params.id;

    const response = await responseModel.findByIdAndRemove(id);
    res.status(202).json(response);
  

};





module.exports= {
    createResponse,
    getResponse,
    deleteResponse
}







