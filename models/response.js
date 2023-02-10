const mongoose = require("mongoose");



const responseSchema = mongoose.Schema(
    {
      // _id:mongoose.Schema.ObjectId,
      responseContent: {
        type: String
      },
      
      userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
  
    //   questionId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Questions",
    //   }

// ,
    //TO BIND TO THE QUESTION
    // questionId :{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref
    // }
    },
    {timestamps:true},
    { typeKey: "$type" }
  );
  

module.exports= mongoose.model("Response",responseSchema);
