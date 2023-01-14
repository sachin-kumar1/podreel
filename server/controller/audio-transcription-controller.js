const Editor = require("../model/Editor");
const { Deepgram } = require('@deepgram/sdk');
const Project = require("../model/Project");
const {initalEditorState} = require("../constants/editor")
const crypto = require('crypto');

const deepgram = new Deepgram('14196d63894de938f5487fc5efeb0b3ae20521aa');


const getAudioTranscriptionFromDeepGram = async (audioURL) => {
    const fileSource = { url: audioURL };
    const response = await deepgram.transcription.preRecorded(fileSource, {
      punctuate: true,
    });

    return response;
}


exports.createAudioTranscription = async (req, res, next) => {
  const data = req.body;

  try {
    const audioURL = data.url;
    const audioData = {
        url: audioURL,
        aliasName: crypto.randomUUID()
    }

    const audioTranscribeData = await getAudioTranscriptionFromDeepGram(audioURL);
    const transcribeData = {
        audioTranscribeData
    }

    let projectState;

    projectState = new Project({
        audio: audioData,
        transcription: transcribeData
    })

    await projectState.save();

    
    let editorState;
    editorState = new Editor({
      ids: initalEditorState.ids,
      elementMap: initalEditorState.elementMap,
      editorProperties: initalEditorState.editorProperties,
      project: projectState
    });

    await editorState.save();

    await projectState.updateOne({
        editor: editorState
    })

    return res.status(200).json({projectState})

  } catch (error) {
    console.log('Error Happened', error);
    return next(error);
  }
};