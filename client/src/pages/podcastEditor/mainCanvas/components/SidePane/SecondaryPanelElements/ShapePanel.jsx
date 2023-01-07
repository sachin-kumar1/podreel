import React from 'react';
import CircleShape from '../../Shapes/CircleShape';
import SquareShape from '../../Shapes/SquareShape';

const ShapePanle = ({ addElementToCanvas }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginLeft: '24px',
        width: '100%',
      }}
    >
      <p
        style={{
          color: 'white',
          fontWeight: 500,
          fontSize: '28px',
          lineHeight: '44px',
        }}
      >
        Shapes
      </p>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '25px',
            flexWrap: 'wrap',
          }}
        >
          <div
            onClick={() => {
              addElementToCanvas('square');
            }}
          >
            <SquareShape width={90} height={90} />
          </div>
          <div
            onClick={() => {
              addElementToCanvas('circle');
            }}
          >
            <CircleShape width={90} height={90} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShapePanle;
