const mongoose = require("mongoose");



const formSchema = mongoose.Schema(
  {
    title: {
      type: String
      // required: true,
    },
    description: {
      type: String
      // required: true,
    },
   

    questions: {
      type:[
        {
          questionContent:{type:String},
          questionNumber:{type:Number},
          questionType: {
            type: String
            // required: true,
          }
        }
      ]
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
  { typeKey: "$type" }
);

module.exports = mongoose.model("Form", formSchema);