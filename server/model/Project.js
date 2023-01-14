const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    audio:{
        type: Object
    },
    transcription:{
        type: Object
    },
    editor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Editor"
    }
})

module.exports = mongoose.model("Project",projectSchema)