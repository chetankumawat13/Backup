const express = require('express');

const app = express();


app.use(express.json());

app.get('/',(req,res) => {
    res.send("hello")
})

const notes = []



app.post('/notes',(req,res) => {
    console.log(req.body);
    res.send('notes created')
    notes.push(req.body)
})

app.get('/notes',(req,res) => {
    res.send(notes)
})


app.listen(3000,() => {
    console.log('app is running on port 3000');
})