import React from 'react';

const BackgroundPanel = ({addElementToCanvas}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginLeft: '24px',
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
        Background settings
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
        <button
          style={{
            background: 'transparent',
            border: '1px solid #646464',
            borderRadius: '4px',
            width: '356px',
            height: '65px',
          }}
          onClick={async()=>{
            await addElementToCanvas("backgroundColor")
          }}
        >
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                color: 'white',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '44px',
              }}
            >
              Add solid color
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BackgroundPanel;
