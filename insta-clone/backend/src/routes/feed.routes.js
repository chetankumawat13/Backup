const express = require('express')
const identifyUser = require('../middlewares/auth.middleware')
const { getHomeFeedController, getProfileController } = require('../controller/auth.controller')

const feedRouter = express.Router()



feedRouter.get('/home',identifyUser,getHomeFeedController)

feedRouter.get('/profile/:username',identifyUser,getProfileController)


module.exports = feedRouter