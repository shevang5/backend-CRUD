const express = require('express');
const connectToDB = require("./src/db/db")
const noteModel = require("./src/models/note.model") 

connectToDB();

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/notes',async (req, res) => {
    const { title, content } = req.body;
    await noteModel.create({
        title,content
    })
    res.json({
        message:"notes created sucessfully"
    })

    console.log(req.body);
})

app.get("/notes",async (req,res)=>{
    const notes = await noteModel.find()
    res.json({
        message:"notes fetch sucessfuly",
        notes
        
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const noteid = req.params.id
    await noteModel.findOneAndDelete({
        _id : noteid
    })
    res.json({
        message:"note deleted sucessfully"
    })
})


app.patch("/notes/:id",async(req,res)=>{
    const noteid = req.params.id
    const {title,content} = req.body
    await noteModel.findOneAndUpdate({
        _id: noteid
    },{
        title:title,
        content:content
    })
    res.json({
        message:"note updated sucessfully"
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');  
})