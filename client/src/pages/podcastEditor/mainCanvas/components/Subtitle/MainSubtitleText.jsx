import React, { useEffect, useState } from 'react';

const MainSubtitleText = ({
  textChunks,
  numberOfLines,
  audioJson,
  currentTime,
  fontSize,
}) => {
  const [offSet, setOffSet] = useState({
    textOffSet: 0,
    chunkOffSet: 0,
  });

  const [textBlocksToRender, setTextBlocksToRender] = useState([]);

  useEffect(() => {
    const textBlocks = getTextToRender(currentTime, offSet);
    if (textBlocks.length > 0) setTextBlocksToRender(textBlocks);
  }, [currentTime]);

  const getTextToRender = (currentTime, offSet) => {
    if (
      offSet.chunkOffSet >= textChunks.length  ||
      offSet.textOffSet >= audioJson.words.length 
    ) {
      return [];
    }
 
    let textVal = '';

    for (let i = 0; i < numberOfLines; i++) {
      const curChunk = i + offSet.chunkOffSet;
      if (textChunks[curChunk]) {
        if (i !== 0) textVal += ' ' + textChunks[curChunk];
        else textVal += textChunks[curChunk];
      }
    }

    const splitedText = textVal.split(' ');
    const splitedTextLength = splitedText.length;

    const wordsToTake = audioJson.words.slice(
      offSet.textOffSet,
      splitedTextLength + offSet.textOffSet
    );

    if (wordsToTake[wordsToTake.length - 1]?.start <= currentTime) {   
        const curChuckOff = offSet.chunkOffSet;
        const curTextOffSet = offSet.textOffSet;
        let curOff = {
          textOffSet: curTextOffSet + splitedTextLength,
          chunkOffSet: curChuckOff + numberOfLines,
        };
        setOffSet(curOff);
      
    }

    return wordsToTake;
  };

  return (
    <React.Fragment>
      {textBlocksToRender.map((word) => {
        return (
          <span
            style={{
              font: `${fontSize}px Arial`,
              wordWrap: 'break-word',
              color: word.start <= currentTime ? 'red' : 'black',
            }}
          >
            {word.text}
          </span>
        );
      })}
    </React.Fragment>
  );
};

export default MainSubtitleText;
