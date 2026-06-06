const express = require('express')
const identifyUser = require('../middlewares/auth.middleware')
const { getHomeFeedController } = require('../controller/auth.controller')

const feedRouter = express.Router()



feedRouter.get('/home',identifyUser,getHomeFeedController)



module.exports = feedRouter