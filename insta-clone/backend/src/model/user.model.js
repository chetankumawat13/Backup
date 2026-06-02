const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,'with this username user already exist'],
        required:[true,"username required to create account"]
    },
    email:{
        type:String,
        unique:[true,'with this email user already exist'],
        required:[true,'email required to create account']
    },
    password:{
        type:String,
        required:[true,'password required to create account']
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/ad6av31ld/blank-profile-picture-973460_640.webp?updatedAt=1770787184788"
    },
    accountType:{
        type:String,
        enum:['public','private'],
        default:"public"
    }
})


const userModel = mongoose.model('users',userSchema)


module.exports = userModel