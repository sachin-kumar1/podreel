import React, { useEffect, useRef, useState } from 'react';
import {
  SpectrumVisualizer,
  SpectrumVisualizerTheme,
} from 'react-audio-visualizers';
import axios from 'axios';
import { Buffer } from 'buffer';

const BarWave = () => {
  const audioURL =
    'https://res.cloudinary.com/dldsts1vk/video/upload/v1671278646/sample-5_y6yryy.mp3';
  const buttonRef = useRef(null);

  const [audio, setAudio] = useState(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioString, setAudioString] = useState('');

  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const ctx = useRef(null);
//   const analyser = useRef(null);
//   const audioSource = useRef(null);
  const audioRef = useRef(null);

  const getBase64 = async (url) => {
    try {
      console.log('BASE 64 CONVERSION');
      const response = await axios.get(audioURL, {
        responseType: 'arraybuffer',
      });
      const base64 = Buffer.from(response.data, 'binary').toString('base64');
      const baseString = 'data:' + 'audio/x-wav' + ';base64,' + base64;
      // console.log("🚀 ~ file: BarWave.jsx:16 ~ getBase64 ~ baseString", baseString)
      const loadedAudio = new Audio();
      loadedAudio.src = baseString;
      audioRef.current.src = baseString;
      setAudioString(baseString);
      setAudio(loadedAudio);
      setAudioLoaded(true);
      return baseString;
    } catch (e) {
      console.log('Error happended', e);
      return { error: e };
    }
  };



  useEffect(() => {
    getBase64();

    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight - 400;
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, []);

  useEffect(()=>{

  },[])

  const handleAudioPlayBack = () => {
    audio.play();
    audio.addEventListener('playing', () => {
      console.log('Audio started to play');
    });
    audio.addEventListener('ended', () => {
      console.log('Audio has ended');
    });

    // const oscillator = audioCtx.createOscillator();
    // oscillator.connect(audioCtx.destination);
    // oscillator.type = 'triangle';

    // oscillator.start();
  };

  if (!audioLoaded && audioString !== '') {
    return <h1>Loadingd...</h1>;
  }

  

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'transparent',
        width: '100%',
        height: '600px',
      }}
      id="container"
      ref={containerRef}
      onClick={() => {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        audioRef.current.play();

        let audioSource = audioCtx.createMediaElementSource(audioRef.current);
        let analyser = audioCtx.createAnalyser();

        audioSource.connect(analyser);
        analyser.connect(audioCtx.destination);

        analyser.fftSize = 512;

        const bufferLength = analyser.frequencyBinCount;
        console.log(
          '🚀 ~ file: BarWave.jsx:96 ~ BarWave ~ bufferLength',
          bufferLength
        );
        const dataArray = new Uint8Array(bufferLength);
        console.log(
          '🚀 ~ file: BarWave.jsx:97 ~ BarWave ~ dataArray',
          dataArray,
          typeof dataArray
        );

        const barWidth = 10;
        let barHeight;
        let x;
        
        const animateCanvasBar = () => {
            console.log("🚀 ~ file: BarWave.jsx:92 ~ BarWave ~ dataArray", dataArray, typeof dataArray)
            x = 0; 
            ctx.current.clearRect(
              0,
              0,
              canvasRef.current.width,
              canvasRef.current.height
            );
            console.log("🚀 ~ file: BarWave.jsx:100 ~ BarWave ~ analyser.current", analyser.current)
        
            analyser.getByteFrequencyData(dataArray);
        
            for (let i = 0; i < bufferLength; i++) {
              barHeight = dataArray[i];
              ctx.current.fillStyle = 'red';
              ctx.current.fillRect(
                x,
                canvasRef.current.height - barHeight,
                barWidth,
                barHeight
              );
              x+=barWidth;
            }
            
            requestAnimationFrame(animateCanvasBar);
          };

        animateCanvasBar(analyser,dataArray,bufferLength,barHeight,barWidth,x)
      }}
    >
      {/* <button ref={buttonRef} onClick={() => {
                console.log("Button Clicked")
                handleAudioPlayBack();
            }} >Click</button> */}

      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
        id="canvas1"
      ></canvas>
      <audio
        style={{ width: '300px', height: '100px', display:"none" }}
        id="audio1"
        controls
        ref={audioRef}
      ></audio>
    </div>
  );
};

export default BarWave;
