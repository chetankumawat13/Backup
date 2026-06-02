const express = require('express')
const identifyUser = require('../middlewares/auth.middleware')
const { followUserController, unfollowUserController } = require('../controller/user.controller')

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

module.exports = userRouter