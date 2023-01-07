import React from 'react';

const Image = ({ element }) => {
  const placeHolderImage = "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
  return (
    <div style={{ width: element.width, height: element.height }}>
      <img
        style={{ height: '100%', width: '100%' }}
        src= {element.src ? element.src : placeHolderImage}
      />
    </div>
  );
};

export default Image;