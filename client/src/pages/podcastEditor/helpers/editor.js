import axios from 'axios';

const updateEditor = async (newEditorState) => {
// console.log("🚀 ~ file: editor.js:4 ~ updateEditor ~ newEditorState", newEditorState)
  await axios.put(
    `http://localhost:5000/editor-contents/update/${newEditorState.key}`,
    {
      ids: newEditorState.ids,
      elementMap: newEditorState.elementMap,
    }
  );
};

export { updateEditor };
