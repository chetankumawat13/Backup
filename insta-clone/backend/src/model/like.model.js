const mongoose = require('mongoose')

const likeSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts",
        required:[true,"post id is required to like an post"]
    },
    user:{
        type:String,
        required:[true,'user required to like an a post']
    }
},{
    timestamps:true
})

likeSchema.index({post:1,user:1},{unique:true})

const likeModel = mongoose.model("likes",likeSchema)



module.exports = likeModel