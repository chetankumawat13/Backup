const {Router} = require('express')
const { registerController, loginController, getMeController, logoutUser } = require('../controllers/auth.controller')
const { authUser } = require('../middleware/auth.middleware')

const authRouter = Router()


authRouter.post('/register',registerController)

authRouter.post('/login',loginController)

authRouter.get('/get-me',authUser,getMeController)

authRouter.get('/logout',logoutUser)

module.exports = authRouter



