const mongoose = require("mongoose");
const { title } = require("process");


// const noteSchema = new mongoose.Schema({
//     title:String,
//     content:String
// });

// const noteModel = mongoose.model("note",noteSchema);

// module.exports = noteModel;

const noteSchema = new mongoose.Schema({
    title:String,
    content:String
});

const noteModel = mongoose.model("notes", noteSchema)

module.exports = noteModel;