import React from 'react';
import * as animationData from '../assets/16581-audio.json';
import Lottie from 'react-lottie';

const AudioWave = ({ element }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={element.height}
        width={element.width}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};

export default AudioWave;
