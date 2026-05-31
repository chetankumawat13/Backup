const express = require('express');
const userModel = require('../models/user.model');
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const authRouter = express.Router();


/**
* /api/auth/register
*/

authRouter.post('/register', async (req,res) => {

    const {username,email,password} = req.body

    const isUserAlreadyExit = await userModel.findOne( {email} )

    console.log(isUserAlreadyExit);
    if(isUserAlreadyExit){
        return res.status(409).json({
            message:"user already exist with this email"
        })
    }

    const hash = crypto.createHash('md5').update(password).digest('hex')

    const user = await userModel.create({
        username,
        email,
        password:hash
    })

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt-token",token)

    res.status(201).json({
        message:"user created successfully",
        user,
        token
    })



})

/**
*  /api/aut/login
*/

authRouter.post('/login', async (req,res) => {
    const {email,password} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(404).json({
            message:"user not found with this email"
        })
    }

    const isPasswordMatched = user.password === crypto.createHash('md5').update(password).digest('hex')

    if(!isPasswordMatched){
        return res.status(404).json({
            message:"password is wrong"
        })
    }

    const token = jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET
    )

    res.cookie('token',token)

    res.status(200).json({
        message:"user logged In",
        user,

    })


}) 


/**
* /api/auth/get-me
*/

authRouter.get('/get-me', async(req,res) => {
    const token = req.cookies.token

   const decoded = jwt.verify(token,process.env.JWT_SECRET)

   const user = await userModel.findById(decoded.id)

   res.status(200).json({
    message:"data fetched successfully",
    user
   })

})


module.exports = authRouter

