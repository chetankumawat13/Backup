const app = require('./src/app.js')
const connectToDB = require('./src/config/database.js')


const PORT =  process.env.PORT || 3000

require('dotenv').config()

connectToDB();

app.listen(PORT,() => {
    console.log(`app is listen on ${PORT}`);
})