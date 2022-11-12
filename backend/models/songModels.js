const mongoose = require('mongoose')

const songSchema  = new mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    songLink :{
        type:String,
        required: true
    },
    artist:[
        {
            name : {
                type:String,
                required:true
            },
            id:{
                type:mongoose.Schema.ObjectId,
                required:true,
            }

        }
    ],
   
    likes :
    {
        type:Number,
        default:0
    },
    coverPoster :[
        {
            public_id:{
                type:String,
                required:true

            },
            url : {
                type:String,
                required:true
            }
        }
    ],
    uploaded:{
        type:Date,
       required:true,
    }
})

module.exports = mongoose.model("Song" , songSchema)