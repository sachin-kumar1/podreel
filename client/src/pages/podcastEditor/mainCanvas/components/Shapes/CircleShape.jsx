import React, { useEffect, useRef } from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const CircleShape = ({ width, height, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.beginPath();
      ctx.arc(width / 2, width / 2, width / 2, 2 * Math.PI, false);

      ctx.fillStyle = color ? color : 'yellow';
      ctx.fill();
    }
  }, [width, height, color]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
    />
  );
};

export default CircleShape;
