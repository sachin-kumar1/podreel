import React from 'react';
import audioJson from '../../assets/sampletrans.json';
import { AudioStream } from './AudioStream';

const Subtitles = () => {
  const [currentTime2, setCurrentTime2] = React.useState(0);

  const renderPagrgraph = () => {
    const paragraph = audioJson.words.map((word) => {
      // console.log(word.start, currentTime2, word.start <= currentTime2);
      if (word.start <= currentTime2) {
        return <h2 style={{ color: 'red' }}>{word.text}</h2>;
      }
      return <h2>{word.text}</h2>;
    });
    return paragraph;
  };

  React.useEffect(() => {
    renderPagrgraph();
  }, currentTime2);

  return (
    <div
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: '4px',
        flexWrap: 'wrap',
      }}
    >
      {renderPagrgraph()}
      <div className={'currentTime'}>
        <AudioStream
          src={'https://od.lk/s/MTBfMTk4NzU0OTc0Xw/sample-5.mp3'}
          type={'audio'}
          setCurrentTime={setCurrentTime2}
        />
        {/* <p>⏱ {currentTime2}</p> */}
      </div>
    </div>
  );
};

export default Subtitles;
