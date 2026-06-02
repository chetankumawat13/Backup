const express = require('express')
const identifyUser = require('../middlewares/auth.middleware')
const { followUserController, unfollowUserController, acceptRequestController } = require('../controller/user.controller')

const userRouter = express.Router()


/**
 * @route /api/users/follow/:username
 * @description follow a user
 * @access private
 */


userRouter.post('/follow/:username',identifyUser,followUserController)



/**
 * @route /api/users/unfollow/:username
 * @description unfollow a user
 * @access private
 */


userRouter.post('/unfollow/:username',identifyUser,unfollowUserController)



/**
 * @route /api/users/request/:requestId/accept
 * @description accept user follow request
 * @access private
 */


userRouter.patch('/request/:requestId/accept',identifyUser,acceptRequestController)

module.exports = userRouter