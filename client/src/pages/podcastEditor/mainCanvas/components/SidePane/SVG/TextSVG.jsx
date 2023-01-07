import React from 'react';
import SVG from 'react-inlinesvg';

const TextSVG = () => {
    const textSVG = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="url(#asd)" d="M0 0h40v40H0z"/><defs><pattern id="asd" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#bxc" transform="scale(.01)"/></pattern><image id="bxc" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAABwElEQVR4nO3dv00DMRhA8c8HEhuwAF1CHcwUdAwBQzAFDMEGdHScUgMdFRvQUXAfA/AnATvRA71ffbJ9epLla3wRkiRJkiRJ0t9QWgcYx3GWmac9FvPXlVKua62PLWPsti5iKmVeIi5ax/kPplIeIqIpyNBpLerEIDAGgTEIjEFgDALTfOxdU9NR8INS9iLzYMUzT5H52nXeiFnn8T7YSpDjWuc9x1sul/O3zPvvntkp5WRxdPTQc967ccye433GLQvGIDAGgTEIjEFgDAJjEJjm75Ah82YYhsMei6HbWfGe0zQ9t87RHKTW+hIRXT/AqBaLxcbf0y0LxiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwDT/8mgTxnE8y4jzLx/ocNV4ibistV79fpWbsa27338kM/ejlK/vWc81bvxeESwz93+8sC1wy4IxCIxBYAwCYxAYg8Agj70RcbvW0bZ1DkmSJEmSJEm/9g7FrkUaUBm6jwAAAABJRU5ErkJggg=="/></defs></svg>'
  return (
    <div style={{"display":"flex","justifyContent":"center","alignItems":"center"}} >
      <SVG src={textSVG} />
    </div>
  );
};

export default TextSVG;
