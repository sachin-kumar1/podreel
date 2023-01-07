import React, { useEffect, useRef } from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const SquareShape = ({ width, height, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.fillStyle = "red";
      ctx?.fillRect(0, 0, width, height);
    }
  }, [width, height, color]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ border: `2px solid ${color ? color : "red"}` }}
    />
  );
};

export default SquareShape;
