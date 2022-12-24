const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const editorSchema = new Schema({
    ids:{
        type: Array
    },
    elementMap:{
        type: Object
    }
})

module.exports = mongoose.model("Editor",editorSchema)