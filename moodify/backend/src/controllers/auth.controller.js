const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')

async function registerController(req,res){

    const {username,email,password} = req.body

    const isUserAlreadyExist = await userModel.findOne({
        $or:[
             {email},
             {username}
        ]
    })

    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"user already exist with this " + (isUserAlreadyExist.email === email ? "email" : "username")
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,email,password:hash
    })

    const token = jwt.sign(
        {
            id:user._id,
            username:user.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn:'1d'
        }
    )

    res.cookie("token",token)

    res.status(201).json({
        message:'user register successfully',
        user
    })


}


module.exports = {
    registerController
}