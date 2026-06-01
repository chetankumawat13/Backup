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

    res.status(401).json({
        message:"post created successfully",
        post
    })



  
}




module.exports = {
    createPostController
}