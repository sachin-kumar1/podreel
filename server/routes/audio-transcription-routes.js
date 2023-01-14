const express = require('express');
const { createAudioTranscription } = require('../controller/audio-transcription-controller');
const {} = require('../controller/editor-controller');

const audioTranscriptionRouter = express.Router();

audioTranscriptionRouter.post('/create-audio-transcription', createAudioTranscription);

module.exports = audioTranscriptionRouter;