const app = require('./src/app')
const connectToDB = require('./src/config/database')

require('dotenv').config()

const PORT = process.env.PORT || 3000

connectToDB()

app.listen(PORT,() => {
    console.log(`server is listing on port ${PORT}`)
})