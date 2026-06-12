const express = require('express');
const authRouter = require('./routes/auth.route');
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:' http://localhost:5173',
    methods:['GET','PUT',"POST","DELETE"]
}))


app.use('/api/auth',authRouter)

module.exports = app