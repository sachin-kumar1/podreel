import React, { useState } from "react";
import PrimaryPanel from "./PrimaryPanel";
import SecondaryPanel from "./SecondaryPanel";

const SidePane = ({ addElementToCanvas }) => {
  const [selectedPane, setSelectedPane] = useState("Templates");

  const updateSelectedPane = (pane) => {
    console.log("UPDATED PANE IS", pane);
    setSelectedPane(pane);
  };

  return (
    <div className="overflow-hidden  w-full h-full flex justify-center items-center">
      <PrimaryPanel
        selectedPane={selectedPane}
        updateSelectedPane={updateSelectedPane}
      />
      <SecondaryPanel
        selectedPane={selectedPane}
        addElementToCanvas={addElementToCanvas}
      />
    </div>
  );
};

export default SidePane;
