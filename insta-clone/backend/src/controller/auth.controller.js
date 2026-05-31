const jwt = require('jsonwebtoken')
const userModel = require('../model/user.model')
const crypto = require('crypto')


async function registerController(req,res){
    const {username,email,bio,profileImage,password} = req.body

    const isUserAlreadyExit = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    })

    if(isUserAlreadyExit){
        return res.status(409).json({
            message:'user already exist' + (isUserAlreadyExit.email == email ? 'with this email' : 'with this username')
        })
    }

    const hash = crypto.createHash('md5').update(password).digest('hex');

    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password:hash
    })

    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {
            expiresIn:'1d'
        }
    )

    res.cookie('token',token)

    res.status(201).json({
        message:"user created successfully",
        user:{
            username: user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })

}

async function loginController(req,res){
    const {email,username,password} = req.body;

    const user = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    })

    if(!user){
        return res.status(409).json({
            message:"user not found"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest('hex');
     
    const isPasswordValid = hash === user.password

    if(!isPasswordValid){
        return res.status(404).json({
            message:"password Invalid"
        })
    }

    const token = jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn:'1d'
        }
    )

    res.cookie("token",token)

    res.status(200).json({
        message:"user login successfully",
        user:{
            user:user.username,
            email:user.email,
            profileImage:user.profileImage,
            bio:user.bio

        }
    })

}







module.exports = {
    registerController,
    loginController
}