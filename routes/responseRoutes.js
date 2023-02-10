const express=require('express');

const auth=require('../middlewares/auth');
// const authforadmin=require('../middlewares/authforadmin')


const {createResponse,getResponse}=require('../controllers/responseController')

const responseRouter=express.Router();






responseRouter.get('/',auth,getResponse)

responseRouter.post('/',auth,createResponse)


// responseRouter.delete("/:id",auth,deleteForm);

// responseRouter.put("/:id",auth,updateForm);

// responseRouter.get('/allforms',auth,authforadmin,getAllForms);




module.exports=responseRouter;

