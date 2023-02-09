const mongoose = require("mongoose");


const responseSchema=mongoose.Schema({
  responseContent:{
    type:String
  },
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
    questionId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Question",
      required:true
    }
  
},{ typeKey: "$type" })


// module.exports= mongoose.model("Response",responseSchema);
module.exports=responseSchema;