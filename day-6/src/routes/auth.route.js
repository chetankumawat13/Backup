const express = require('express');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken')

const authRouter = express.Router();


authRouter.post('/register', async (req,res) => {
    const {username,email,password} = req.body

    const isUserAlreadyExist = await userModel.findOne({email})

    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"user already exist with this email"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
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



module.exports = authRouter
