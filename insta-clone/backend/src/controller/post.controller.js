const ImageKit = require('@imagekit/nodejs')
const jwt = require('jsonwebtoken')
const {toFile} = require('@imagekit/nodejs')
const postModel = require('../model/post.model')



const client = new ImageKit({
    privateKey:process.env.IMAGEKIT_API_KEY,
})


async function createPostController(req,res){

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Token not provided, unauthorized user"
        })
    }

    let decoded = null

    try{
        decoded = jwt.verify(token,process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message:"unauthorized user "
        })
    }

    const uploadFile = await client.files.upload({
        file: await toFile(Buffer.from(req.file.buffer),'file'),
        fileName: req.file.originalname,
        folder:"instagram-clone"
    })

    const post = await postModel.create({
        caption:req.body.caption,
        imgUrl:uploadFile.url,
        user:decoded.id
    })

    res.status(201).json({
        message:"post created successfully",
        post
    })



  
}

async function getPostController(req,res){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            messageL:"unauthorized user, toke not found"
        })
    }

    let decoded = null

    try{
        decoded = jwt.verify(token,process.env.JWT_SECRET)
    }catch(err){
       return res.status(401).json({
            message:'unauthorized token'
        })
    }

    const post = await postModel.find({
        user:decoded.id
    })

    res.status(200).json({
        message:"Pots fetched successfully",
        post
    })

}


async function getPostDetailsController(req,res){
    const token = req.cookies.token

    if(!token){
       return res.status(401).json({
            message:"unauthorized access token not fund"
        })
    }

    let decoded = null

    try{
        decoded = jwt.verify(token,process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message:"unauthorized access"
        })
    }

    const userId = decoded.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"post not found"
        })
    }

    const isValidUser = post.user.toString() === userId

    if(!isValidUser){
        return res.status(401).json({
            message:"forbidden"
        })
    }

    res.status(200).json({
        message:"postDetails fetched successfully",
        post
    })

}



module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController
}