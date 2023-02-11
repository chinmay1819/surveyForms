const express=require('express');

const auth=require('../middlewares/auth');
// const authforadmin=require('../middlewares/authforadmin')


const {createResponse,getResponse,deleteResponse}=require('../controllers/responseController')

const responseRouter=express.Router();






responseRouter.get('/',auth,getResponse)

responseRouter.post('/',auth,createResponse)



responseRouter.delete("/:id",auth,deleteResponse);

// responseRouter.put("/:id",auth,updateForm);

//This is for getting all responses of a particular question by question id and form id of all users (only for admin...)
// responseRouter.get('/allforms',auth,authforadmin,getAllForms);




module.exports=responseRouter;

