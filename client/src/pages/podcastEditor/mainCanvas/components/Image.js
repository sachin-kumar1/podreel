import React from 'react';

const Image = ({ element }) => {
  return (
    <div style={{ width: element.width, height: element.height }}>
      <img
        style={{ height: '100%', width: '100%' }}
        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
      />
    </div>
  );
};

export default Image;