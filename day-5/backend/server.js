const app = require('./src/app')
const connectToDB = require('./src/config/database')

require('dotenv').config()
const PORT = process.env.PORT || 3000


/**
 * database connected 
 */

connectToDB()

/**
 * server run
 */

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})