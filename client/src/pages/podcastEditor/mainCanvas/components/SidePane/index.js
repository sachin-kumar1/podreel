import React, { useState } from 'react';
import PrimaryPanel from './PrimaryPanel';
import SecondaryPanel from './SecondaryPanel';

const SidePane = ({addElementToCanvas}) => {
  const [selectedPane,setSelectedPane] = useState("Templates")
  
  const updateSelectedPane = (pane) => {
    console.log("UPDATED PANE IS",pane)
    setSelectedPane(pane);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:'100%'
      }}
    >
      <PrimaryPanel selectedPane={selectedPane} updateSelectedPane={updateSelectedPane} />
      <SecondaryPanel selectedPane={selectedPane} addElementToCanvas={addElementToCanvas}/>
    </div>
  );
};

export default SidePane;
