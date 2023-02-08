const mongoose = require("mongoose");

// const questionSchema = mongoose.Schema({
//   question: {
//     type: String,
//     required: true,
//   }
//   //, response:[responseSchema]
// });

// const responseSchema = mongoose.Schema({
//   response: {
//     type: String,
//   },
// });


//foreign key 

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
    // questions: [
    //   {
    //     type:String,
    //     responses:[
    //       {type:String}
    //     ]
    //   }

    // ],

    questions:{
      type:[
        {
          questionContent:{type:String}
        }
      ],
      default:[]
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



