const express = require('express');
const notesModel = require('./models/notes.model')
const cors = require('cors')

const app = express();


app.use(express.json());
app.use(cors())




//create note
app.post('/api/notes', async(req,res) => {
    const {title,description} = req.body;
    
    const note = await notesModel.create({
        title,description
    })

    res.status(201).json({
        message:"note created successfully",
        note
    })

})

//fetch notes

app.get('/api/notes', async(req,res) => {
    const notes = await notesModel.find();

    res.status(200).json({
        message:"data fetched successfully",
        notes
    })
})

//delete note

app.delete('/api/notes/:id', async(req,res) => {
    const id = req.params.id;
     await notesModel.findByIdAndDelete(id);

     res.status(204).json({
        message:"note delete successfully"
     })
})


//update note

app.patch('/api/notes/:id', async(req,res) => {
    const id = req.params.id
    const {description} = req.body;

    await notesModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message:"note updated successfully"
    })
})


module.exports = app;