import React from 'react'
import CircleShape from './Shapes/CircleShape'
import SquareShape from './Shapes/SquareShape'

const ShapeElement = ({element}) => {
  console.log("🚀 ~ file: ShapeElement.js:4 ~ ShapeElement ~ element", element)
  
  const getShape = (shapeType) => {
    if(shapeType === "square"){
        return SquareShape;
    }
    if(shapeType === "circle"){
        return CircleShape;
    }
  }
  
  const Shape = getShape(element.shapeType);
  return (
    <Shape width={element.width} height={element.height} />
  )
}

export default ShapeElement