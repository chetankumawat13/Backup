const express = require('express');
const { registerController, loginController, getMeController,getHomeFeedController } = require('../controller/auth.controller');
const identifyUser = require('../middlewares/auth.middleware');

const authRouter = express.Router();


/**
 * /api/auth/register
 */

authRouter.post('/register',registerController)

/**
 * /api/auth/login
 */


authRouter.post('/login',loginController)


authRouter.get('/get-me',identifyUser,getMeController)







module.exports = authRouter