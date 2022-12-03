import React from 'react';
import * as animationData from '../assets/16581-audio.json';
import Lottie from 'react-lottie';
import Paragraph from './Paragraph';
import AudioWave from './AudioWave';
import Subtitles from './Subtitle';

const Element = ({ element, onChange, onSelect, onClickCallBack }) => {
  const ref = React.useRef();

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
      {element.id === 'wave' && <AudioWave element={element} />}
      {element.id === 'subtitle' && <Subtitles />}
    </div>
  );
};

export default Element;
