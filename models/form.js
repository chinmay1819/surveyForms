const mongoose = require("mongoose");


// const questionSchema = mongoose.Schema({
//   questionNumber: { type: Number },
//   questionContent: { type: String }
// });





const formSchema = mongoose.Schema(
  {
    // _id:mongoose.Schema.ObjectId,
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },

    questions: {type:[{
      questionNumber: { type: Number },
      questionContent: { type: String }
    }
    ]} ,

    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
  },
  },
  { timestamps: true },
  { typeKey: "$type" }
);



module.exports = mongoose.model("Form", formSchema);
// module.exports= mongoose.model("Questions", questionSchema);