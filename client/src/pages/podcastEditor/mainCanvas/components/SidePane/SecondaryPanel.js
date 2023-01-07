import React from 'react';
import BackgroundPanel from './SecondaryPanelElements/BackgroundPanel';
import ElementsPanel from './SecondaryPanelElements/ElementsPanel';
import ImagePanel from './SecondaryPanelElements/ImagePanel';
import ShapePanel from './SecondaryPanelElements/ShapePanel';
import TextPanel from './SecondaryPanelElements/TextPanel';

const SecondaryPanel = ({ selectedPane, addElementToCanvas }) => {
  console.log(
    '🚀 ~ file: SecondaryPanel.js:4 ~ SecondaryPanel ~ selectedPane',
    selectedPane
  );

  const getPannelToShow = (panel) => {
    switch (panel) {
      case 'Text':
        return TextPanel;
      case 'Elements':
        return ShapePanel;
      case 'Background':
        return BackgroundPanel;
      case 'Photos':
        return ImagePanel;
      default:
        return ElementsPanel;
    }
  };
  const PanelToShow = getPannelToShow(selectedPane);
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#18191B' }}>
      <div
        style={{
          marginTop: '75px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PanelToShow addElementToCanvas = {addElementToCanvas}/>
      </div>
    </div>
  );
};

export default SecondaryPanel;
