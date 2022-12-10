import React, { useEffect, useState } from 'react';
import audioJson from '../../assets/sampletrans.json';

const TestText = ({ currentTime, element }) => {
  console.log("🚀 ~ file: TestText.jsx:5 ~ TestText ~ element", element,element.width, element.height)
  const sidePadding = 10;
  const textWidth = element.width;
  const textHeigth = element.height;
  const fontSize = 20;
  const extra = 5;
  const lineHeight = 8;

  const [textChunks, setTextChunks] = useState([]);
  const [numberOfLines, setNumberOfLines] = useState(0);
  const [offSet, setOffSet] = useState(0);

  const getTextWidth = (text) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const font = `${fontSize}px Arial`;
    context.font = font;

    return context.measureText(text).width;
  };

  const splitString = (n, str) => {
    let arr = str?.split(' ');
    let result = [];
    let subStr = arr[0];
    for (let i = 1; i < arr.length; i++) {
      let word = arr[i];
      if (subStr.length + word.length + 1 <= n) {
        subStr = subStr + ' ' + word;
      } else {
        result.push(subStr);
        subStr = word;
      }
    }
    if (subStr.length) {
      result.push(subStr);
    }
    return result;
  };

  useEffect(() => {
    const text = audioJson.text;
    const textLenght = text.length;
    const totalWidthRequired = getTextWidth(text);

    const textPerPixel = textLenght / totalWidthRequired;
    const currentWidth = textWidth;
    console.log(
      'text length is',
      textLenght,
      'total Width is',
      totalWidthRequired,
      'divided is',
      textLenght / totalWidthRequired
    );

    console.log(
      'Number Of texts that can be fit is',
      currentWidth * textPerPixel
    );
    const textCharactersThatCanBeFitted = currentWidth * textPerPixel;
    const splitedStrings = splitString(textCharactersThatCanBeFitted, text);

    console.log('CHUNKS IS', splitedStrings);
    setTextChunks(splitedStrings);

    const singleCharacterHeight = fontSize + extra + lineHeight;
    const linesToRender = textHeigth / singleCharacterHeight;

    console.log('Lines to render', linesToRender);
    setNumberOfLines(Math.trunc(linesToRender));
  }, [textHeigth, textWidth]);

  const getTextToRender = () => {
    let textVal = '';

    for (let i = 0; i < numberOfLines; i++) {
      if (textChunks[i]) {
        if (i !== 0) textVal += ' ' + textChunks[i];
        else textVal += textChunks[i];
      }
    }

    const splitedText = textVal.split(' ');
    const splitedTextLength = splitedText.length;

    const wordsToTake = audioJson.words.slice(offSet, splitedTextLength);

    console.log('WTK', wordsToTake, splitedTextLength, audioJson.words.length);
    // setOffSet(splitedTextLength);

    return wordsToTake;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'paleturquoise',
        width: `${textWidth}px`,
        height: `${textHeigth}px`,
      }}
    >
      {/* {numberOfLines &&
          textChunks &&
          textChunks.length > 0 &&
          [...Array(numberOfLines).keys()].map((i) => {
            return (
              <p
                style={{
                  font: '20px Arial',
                }}
              >
                {getTextToRender}
              </p>
            );
          })} */}
      {/* <p style={{
                        "font": "20px Arial"
                    }} >{audioJson.text}</p> */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: `${sidePadding}px`, }}>
        {numberOfLines && textChunks && textChunks.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: `${lineHeight}px`,
            }}
          >
            {getTextToRender().map((word, index) => {
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
          </div>
        )}
      </div>

      {/* {textChunks.map((text) => {
                    return (<p style={{
                        "font": "20px Arial"
                    }} >{text}</p>)
                })} */}
      {/* {textChunks && textChunks.length > 0 && <p style={{
                    "font": "20px Arial"
                }} >{textChunks[0]}</p>} */}
    </div>
  );
};

export default TestText;
