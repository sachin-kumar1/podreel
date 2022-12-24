const Editor = require("../model/Editor");

exports.getEditorState = async(req,res,next) => {
    let editorState;
    try {
        editorState = await Editor.find();
        console.log("🚀 ~ file: editor-controller.js:7 ~ getEditorState ~ editorState", editorState);

        return res.status(200).json({editorState})
    } catch (error) {
        console.log("Error Happened",error)
        return next(error)
    }
}

exports.createEditorState = async(req,res,next) => {
    const data = req.body;
    console.log("🚀 ~ file: editor-controller.js:18 ~ exports.createEditorState=async ~ data", data)
    
    let editorState;
    try {
        editorState = new Editor({
            ids:data.ids,
            elementMap:data.elementMap
        })
        console.log("🚀 ~ file: editor-controller.js:7 ~ getEditorState ~ editorState", editorState);
        await editorState.save();
        return res.status(200).json({editorState})
    } catch (error) {
        console.log("Error Happened",error)
        return next(error)
    }
}

exports.updateEditorState = async(req,res,next) => {
    const id = req.params.id;

    const data = req.body;
    console.log("🚀 ~ file: editor-controller.js:18 ~ exports.createEditorState=async ~ data", data)
    
    let editorState;
    try {
        editorState = await Editor.findByIdAndUpdate(id,{
            ids:data.ids,
            elementMap:data.elementMap
        })
        console.log("🚀 ~ file: editor-controller.js:7 ~ getEditorState ~ editorState", editorState);
        // await editorState.save();
        return res.status(200).json({editorState})
    } catch (error) {
        console.log("Error Happened",error)
        return next(error)
    }
}