import React from 'react';

const EditorSubtitletext = ({
  textChunks,
  numberOfLines,
  fontSize,
  audioJson,
}) => {
  const getTextToRender = () => {
    let textVal = '';
    let curOffSet = 0;

    for (let i = 0; i < numberOfLines; i++) {
      const curChunk = i + curOffSet;
      if (textChunks[curChunk]) {
        if (i !== 0) textVal += ' ' + textChunks[curChunk];
        else textVal += textChunks[curChunk];
      }
    }

    const splitedText = textVal.split(' ');
    const splitedTextLength = splitedText.length;

    const wordsToTake = audioJson.words.slice(curOffSet, splitedTextLength);

    return wordsToTake;
  };

  return (
    <React.Fragment>
      {getTextToRender().map((word, index) => {
        return (
          <span
            style={{
              font: `${fontSize}px Arial`,
              wordWrap: 'break-word',
              color: 'black',
            }}
          >
            {word.text}
          </span>
        );
      })}
    </React.Fragment>
  );
};

export default EditorSubtitletext;
