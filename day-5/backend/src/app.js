const express = require('express');
const userModel = require('./models/user.model');

const app = express();

app.use(express.json())

/**
 * @post /api/users user created 
 */

app.post('/api/users', async(req,res) => {
    const {username,description} = req.body

    const user = await userModel.create({
        username,description
    })

    console.log(user);

    res.status(201).json({
        message:"user created successfully",
        user
    })


})

/**
 * @get /api/users fetched userdata
 */


app.get('/api/users', async (req,res) => {
    const users = await userModel.find()

    res.status(200).json({
        message:"user data fetched successfully",
        users
    })
})


/**
 * @delete /api/users/:id delete user
 */

app.delete('/api/users/:id', async(req,res) => {
    const id = req.params.id

    await userModel.findByIdAndDelete(id)

    res.status(204).json({
        message:"user deleted successfully"
    })

})


/**
 * @update /api/users/:id update description
 */

app.patch('/api/users/:id', async(req,res) => {
    const id = req.params.id

    const {description} = req.body;

    await userModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message:"user updated successfully"
    })

    

})


module.exports = app