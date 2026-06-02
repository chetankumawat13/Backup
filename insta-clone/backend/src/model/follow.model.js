const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    follower:{
        type:String,
        required:[true,"Followers is required"]

    },
    followee:{
        type:String,
        required:[true,"Followee is required"]
    },
    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default:"pending"
    }
},{
    timestamps:true
})


followSchema.index({follower:1,followee:1},{unique:true})

const followModel = mongoose.model("follows",followSchema)


module.exports = followModel