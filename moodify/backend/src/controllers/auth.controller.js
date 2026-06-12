const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const redis = require('../config/cache')

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

async function loginController(req,res){
    const {email,username,password} = req.body

    const user = await userModel.findOne({
        $or:[
            {
                email
            },
            {
                username
            }
        ]
    }).select('+password')

    if(!user){
        return res.status(400).json({
            message:"invalid credential"
        })
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        return res.status(400).json({
            message:"invalid credential"
        })
    }

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

    res.cookie('token',token)

    res.status(200).json({
        message:"user login successfully",
        user
    })



}

async function getMeController(req,res){
    const userId = req.user.id



    const user = await userModel.findById(userId)


    res.status(200).json({
        message:"user data fetched successfully",
        user
    })

}

async function logoutUser(req, res) {
    try {

        const token = req.cookies.token;

        if (!token) {
            return res.status(400).json({
                message: "Token not found"
            });
        }

        res.clearCookie("token");

        await redis.set(
            token,
            Date.now().toString()
        );
        return res.status(200).json({
            message: "logout successfully"
        });

    } catch (err) {

        console.error("Logout Error:", err);

        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
}

module.exports = {
    registerController,loginController,getMeController,logoutUser
}
