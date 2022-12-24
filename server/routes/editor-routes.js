const express = require('express');
const {
  getEditorState,
  createEditorState,
  updateEditorState,
} = require('../controller/editor-controller');

const editorRouter = express.Router();

editorRouter.get('/', getEditorState);
editorRouter.post('/create', createEditorState);
editorRouter.put('/update/:id', updateEditorState);

module.exports = editorRouter;
