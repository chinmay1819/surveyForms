const mongoose = require("mongoose");


const responseSchema = mongoose.Schema(
  {
    responseContent: {type:String},
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    formId:{type:String},
    questionId:{
      type:String
    }
  },
  { timestamps: true },
  { typeKey: "$type" }
);

module.exports = mongoose.model("Response", responseSchema);