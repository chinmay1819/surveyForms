const express=require('express');

const auth=require('../middlewares/auth');
// const authforadmin=require('../middlewares/authforadmin')


const {getForms,createForm, testRoute}=require('../controllers/formController')
const formRouter=express.Router();




formRouter.get('/test',auth,testRoute);

formRouter.get('/',auth,getForms)

formRouter.post('/',auth,createForm)


// formRouter.delete("/:id",auth,deleteForm);

// formRouter.put("/:id",auth,updateForm);

// formRouter.get('/allproducts',auth,authforadmin,getAllForms);



module.exports=formRouter

