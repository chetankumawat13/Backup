const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'username required to create account'],
        unique:[true,'this username user already exist']
    },
    email:{
        type:String,
        required:[true,'email required to create account'],
        unique:[true,'this email already use to create account']
    },
    password:{
        type:String,
        required:[true,'password is required to create user'],
        select:false
    }

})


const userModel = mongoose.model('users',userSchema)


module.exports = userModel

