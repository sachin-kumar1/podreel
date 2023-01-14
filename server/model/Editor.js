const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const editorSchema = new Schema({
    ids:{
        type: Array
    },
    elementMap:{
        type: Object
    },
    editorProperties:{
        type: Object
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }
})

module.exports = mongoose.model("Editor",editorSchema)