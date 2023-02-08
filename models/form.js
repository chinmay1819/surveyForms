const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
  {
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
  
    // questions:{
    //   type:[
    //     {
    //       questionContent:{type:String}
    //     }
    //   ]
    // },

  


questions:{
  type:[
    {
      questionContent:{type:String},
      responses:{
        type:[
          {
            responseContent:{type:String,
              userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
              }
            }
          }
        ]
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
  { typeKey: '$type' }
);

module.exports = mongoose.model("Form", formSchema);



