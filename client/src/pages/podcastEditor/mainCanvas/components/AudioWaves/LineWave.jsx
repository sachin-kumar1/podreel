import React, { useEffect, useRef, useState } from 'react';
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';
import axios from 'axios';
import { Buffer } from 'buffer';
import { audioString } from './audiosrc';
import { useSelector } from 'react-redux';


const LineWave = ({element}) => {
  const sketchRef = useRef(null);

  const audioState = useSelector((state) => state.audio)

  const song = useRef(null);
  const fft = useRef(null);

  var bins = 512;
  var smoothing = 0;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(element.width, element.height).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    song.current = p5.loadSound(audioString, () => {
      console.log('Loaded');
    });
    fft.current = new window.p5.FFT(smoothing, bins);
  };

  const draw = (p5) => {
    p5.resizeCanvas(element.width,element.height)
    p5.clear();
    p5.stroke('black');
    p5.noFill();

    p5.translate(p5.width / 2, p5.height / 2);

    var wave = fft.current.waveform();

    p5.beginShape();
    for (let i = 0; i <= 180; i++) {
      var index = p5.floor(p5.map(i, 0, 180, 0, wave.length - 1));

      var r = p5.map(wave[index], -1, 1, ((element.width - 30) * 1/4), ((element.width - 30) * 3/4));
      var x = r * p5.sin(i);
      var y = r * p5.cos(i);

      p5.vertex(x, y);
    }
    p5.endShape();

    p5.beginShape();
    for (let i = 0; i <= 180; i++) {
      var index = p5.floor(p5.map(i, 0, 180, 0, wave.length - 1));

      var r = p5.map(wave[index], -1, 1, ((element.width - 30) * 1/4), ((element.width - 30) * 3/4));
      var x = r * -p5.sin(i);
      var y = r * p5.cos(i);

      p5.vertex(x, y);
    }
    p5.endShape();
  };

  useEffect(() => {
    if (audioState.audioStarted) {
        song.current.play();
    }
  }, [audioState, song])

  return (
    <div>
      <Sketch ref={sketchRef} setup={setup} draw={draw} />
      <button
        onClick={() => {
          if (song.current) {
            song.current.play();
          }
        }}
        style={{ display: "none" }}
      >
        Play Audio
      </button>
    </div>
  );
};

export default LineWave;
