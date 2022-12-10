import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as animationData from '../assets/16581-audio.json';
import Lottie from 'react-lottie';
import Paragraph from './Paragraph';
import AudioWave from './AudioWave';
import Subtitles from './Subtitle';

const Element = ({ element, onChange, onSelect, onClickCallBack, activeElementProperties }) => {
  const ref = React.useRef();
  const [currentSize, setCurrentSize] = useState({ width: element.width, height: element.height });

  // useEffect(()=>{
  //   console.log("Called here rerender")
  //   if(ref.current){
  //     console.log("🚀 ~ file: Element.js:14 ~ useEffect ~ current", ref.current.style.width)
      
  //     const newSize = {
  //       width: ref.current.offsetWidth,
  //       height: ref.current.offsetHeight,
  //     }
  //     setCurrentSize(newSize);
  //   }
  // },[ref.current?.offsetWidth, ref.current?.offsetHeight])

  useEffect(()=>{
    if(activeElementProperties && activeElementProperties.id === "subtitle" && activeElementProperties.height){
      const newSize = {
        width: activeElementProperties.width,
        height: activeElementProperties.height,
      }
        console.log("🚀 ~ file: Element.js:32 ~ useEffect ~ activeElementProperties.width", activeElementProperties)
      setCurrentSize(newSize);
    }
  },[activeElementProperties, activeElementProperties?.id])

  // useLayoutEffect(()=>{
  //   console.log("Called here rerender")
  //   if(ref.current){
  //     console.log("🚀 ~ file: Element.js:14 ~ useEffect ~ current", ref.current.style.width)
      
  //     const newSize = {
  //       width: ref.current.offsetWidth,
  //       height: ref.current.offsetHeight,
  //     }
  //     setCurrentSize(newSize);
  //   }
  // },[ref.current.offsetWidth])

  return (
    <div
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        onSelect({ id: element.id, ref: ref.current });
        if (onClickCallBack) {
          onClickCallBack();
        }
      }}
      style={{
        overflow: 'hidden',
        background: element.background,
        width: element.width,
        height: element.height,
        position: 'absolute',
        top: 0,
        left: 0,
        transform: `translate(${element.x}px, ${element.y}px) rotate(${element.rotate}deg)`,
      }}
    >
      {element.id === 'text' && <Paragraph />}
      {element.id === 'wave' && (
        <AudioWave
          element={element}
        />
      )}
      {element.id === 'subtitle' && <Subtitles element={currentSize} />}
    </div>
  );
};

export default Element;
