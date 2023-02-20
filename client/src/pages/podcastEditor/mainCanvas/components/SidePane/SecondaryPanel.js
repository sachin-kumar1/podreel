import React from "react";
import BackgroundPanel from "./SecondaryPanelElements/BackgroundPanel";
import ElementsPanel from "./SecondaryPanelElements/ElementsPanel";
import ImagePanel from "./SecondaryPanelElements/ImagePanel";
// import ImageCrop from "./SecondaryPanelElements/ImageCrop";
import ShapePanel from "./SecondaryPanelElements/ShapePanel";
import TextPanel from "./SecondaryPanelElements/TextPanel";
import TemplatePanel from "./SecondaryPanelElements/TemplatePanel";
import TranscriptPanel from "./SecondaryPanelElements/TranscriptPanel";
import { BsPaletteFill } from "react-icons/bs";

const SecondaryPanel = ({ selectedPane, addElementToCanvas }) => {
  console.log(
    "🚀 ~ file: SecondaryPanel.js:4 ~ SecondaryPanel ~ selectedPane",
    selectedPane
  );

  const getPannelToShow = (panel) => {
    switch (panel) {
      case "Templates":
        return TemplatePanel;
      case "Text":
        return TextPanel;
      case "Elements":
        return ShapePanel;
      case "Background":
        return BackgroundPanel;
      case "Photos":
        return ImagePanel;
      case "Transcript":
        return TranscriptPanel;
      default:
        return ElementsPanel;
    }
  };
  const PanelToShow = getPannelToShow(selectedPane);
  return (
    <div
      id="secondary-panel"
      className=" overflow-auto secondary-panel font-inter"
      style={{ width: "100%", height: "100%", backgroundColor: "#18191B" }}
    >
      <div className="mt-[75px] flex justify-center items-center">
        <PanelToShow addElementToCanvas={addElementToCanvas} />
      </div>
    </div>
  );
};

export default SecondaryPanel;
