const followModel = require("../model/follow.model")
const userModel = require("../model/user.model")



async function followUserController(req,res){

    const followerUsername = req.user.username
    const followeeUsername = req.params.username
    

    if(followeeUsername === followerUsername){
        return res.status(400).json({
            message:"you cannot follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({
        username:followeeUsername
    })

    if(!isFolloweeExists){
        return res.status(404).json({
            message:"User you are trying to follow don't exists"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        followee:followeeUsername,
        follower:followerUsername
    })

    if(isAlreadyFollowing){
        return res.status(200).json({
            message:`you are already following ${followeeUsername}`,
            follow: isAlreadyFollowing
        })
    }

     const status = isFolloweeExists.accountType === "private" ? "pending" : "accepted"

    const followRecord = await followModel.create({
        follower:followerUsername,
        followee:followeeUsername,
        status
    })

   

    res.status(201).json({
        message: status == "pending" ? "follow request sent" : `you are following ${followeeUsername}`,
        follow:followRecord,
    })

}

async function unfollowUserController(req,res){
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        followee:followeeUsername,
        follower:followerUsername
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message:`you are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message:`you have unfollowed ${followeeUsername}`
    })
}

async function acceptRequestController(req,res){
   try{
    const requestId = req.params.requestId
    console.log(requestId);
    const username = req.user.username

    const request = await followModel.findById(requestId)

    if(!request){
        return res.status(404).json({
            message:"request not found"
        })
    }

    if(request.followee !== username){
        return res.status(403).json({
            message:"forbidden"
        })
    }
    request.status = "accepted"

    await request.save()

    res.status(200).json({
        message:"request accepted successfully",
        request
    })
   }catch(err){
     return res.status(404).json({
        message:'invalid request id'
     })
   }

}




module.exports = {
    followUserController,
    unfollowUserController,
    acceptRequestController

}