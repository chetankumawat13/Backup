const jwt = require('jsonwebtoken')
const userModel = require('../model/user.model')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const followModel = require('../model/follow.model')
const postModel = require('../model/post.model')

async function registerController(req,res){
    const {username,email,bio,profileImage,password,accountType} = req.body

    const isUserAlreadyExit = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    })

    if(isUserAlreadyExit){
        return res.status(409).json({
            message:'user already exist' + (isUserAlreadyExit.email == email ? '  with this email' : '  with this username')
        })
    }

    const hash = await bcrypt.hash(password,10);

    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password:hash,
        accountType
    })

    const token = jwt.sign(
        {id:user._id,
            username:user.username
        },
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
            profileImage:user.profileImage,
            accountType
        }
    })

}

async function loginController(req,res){
    const {identifier,password} = req.body;

    const user = await userModel.findOne({
        $or:[
            {email:identifier},
            {username:identifier}
        ]
    })

    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }

     
    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message:"password Invalid"
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

    res.cookie("token",token)

    res.status(200).json({
        message:"user login successfully",
        user:{
            user:user.username,
            email:user.email,
            profileImage:user.profileImage,
            bio:user.bio,
            accountType:user.accountType

        }
    })

}

async function getMeController(req,res){
    const userId = req.user.id

    if(!userId){
        return res.status(404).json({
            message:"user not found"
        })
    }

    const user = await userModel.findById(userId)

    res.status(200).json({
        username:user.username,
        email:user.email,
        accountType:user.accountType,
        bio:user.bio,
        profileImage:user.profileImage
    })

}

async function getHomeFeedController(req,res){
    const userName = req.user.username;

    const following = await followModel.find({
        follower:userName,
        status:"accepted"
    })

    const followingUsernames = following.map(f => f.followee)

    const users = await userModel.find({
        username:{$in: followingUsernames}
    }).select("_id")

    const userIds = users.map(user => user._id);


    const posts = await postModel.find({
        user:{$in:userIds}
    }).populate('user').sort({_id:-1})


    res.status(200).json({
        message:'home feed dataFetched successfully',
        post:posts
    })



}







module.exports = {
    registerController,
    loginController,
    getMeController,
    getHomeFeedController
}