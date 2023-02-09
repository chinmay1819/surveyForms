const { response } = require("express");
const formModel = require("../models/form");

//FOR CREATING A FORM...
const createForm = async (req, res) => {

formModel.create( {  'title': req.body.title, 
                        'description': req.body.description, 
                        'type': req.body.type,
                        'questions':req.body.questions,
                        'userId':req.userId
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

//FOR UPDATING FORM
// const updateForm = async (req, res) => {
//   const id = req.params.id;
//   const { title, description, price } = req.body;
//   const newForm = {
//     title: title,
//     description: description,
//     price: price,
//     userId: req.userId,
//   };
//   try {
//     await formModel.findByIdAndUpdate(id, newForm, { new: true });
//     res.status(200).json(newForm);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Something went wrong.." });
//   }
// };

//FOR DELETING A FORM
// const deleteForm = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const form = await formModel.findByIdAndRemove(id);
//     res.status(202).json(form);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Something went wrong..." });
//   }
// };


//FOR GETTING FORMS
const getForms = async (req, res) => {
  try {
    const forms = await formModel.find({
      userId: req.userId,
    });
    res.status(200).json(forms);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong..." });
  }
};


//FOR GETTING ALL FORMS OF ALL USERS AS AN ADMIN...
// const getAllForms =async (req,res)=>{

// 	try{
// 		const forms=await formModel.find()
// 		res.status(200).json(forms);

// 	}
// 	catch(error){
// 		console.log(error);
// 		res.status(500).json({message:"Something went wrong..."});
// 	}

// }


const testRoute = async (req,res)=>{
    res.send('Hello ...');
}

module.exports = {
  createForm,
//   updateForm,
//   deleteForm,
  getForms
//  , getAllForms,
};






















