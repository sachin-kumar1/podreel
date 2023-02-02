import React from "react";
import { pannelContents } from "./constants";
import BackGroundSVG from "./SVG/BackGroundSVG";
import ElementsSVG from "./SVG/ElementsSVG";
import PhotoSVG from "./SVG/PhotoSVG";
import TemplateSVG from "./SVG/TemplateSVG";
import TextSVG from "./SVG/TextSVG";
import TranscriptSVG from "./SVG/TranscriptSVG";
// icons
import { RxText } from "react-icons/rx";
import { TfiText } from "react-icons/tfi";
import { HiTemplate } from "react-icons/hi";
import { RxTransparencyGrid } from "react-icons/rx";
import { BsImage } from "react-icons/bs";
import { GrStackOverflow } from "react-icons/gr";
import { MdClosedCaption } from "react-icons/md";

const PannelItem = ({
  name,
  marginTop,
  desc,
  updateSelectedPane,
  isSlectedPane,
}) => {
  const getSVGComponent = (name) => {
    console.log("CALLED HERE 1 NAME", name, name === "Elements");

    // switch (name) {
    //   case "Templates":
    //     return TemplateSVG;
    //   case "Elements":
    //     return ElementsSVG;
    //   case "Text":
    //     return TextSVG;
    //   case "Photos":
    //     return PhotoSVG;
    //   case "Transcript":
    //     return TranscriptSVG;
    //   case "Background":
    //     return BackGroundSVG;
    //   default:
    //     return TemplateSVG;
    // }
    switch (name) {
      case "Templates":
        return HiTemplate;
      case "Elements":
        return GrStackOverflow;
      case "Text":
        return TfiText;
      case "Photos":
        return BsImage;
      case "Transcript":
        return MdClosedCaption;
      case "Background":
        return BackGroundSVG;
      default:
        return TemplateSVG;
    }
  };
  const SVGToRender = getSVGComponent(name);

  return (
    <div
      onClick={() => {
        updateSelectedPane(name);
      }}
      className="cursor-pointer flex flex-col items-center justify-center mb-8 "
    >
      <div
        className={`p-2`.concat(
          isSlectedPane ? " bg-white rounded-[19px]" : " "
        )}
      >
        <SVGToRender
          className="text-[30px]"
          fill={isSlectedPane ? "black" : `white`}
        />
      </div>
      <p style={{ color: "white" }}>{desc}</p>
    </div>
  );
};

const PrimaryPanel = ({ selectedPane, updateSelectedPane }) => {
  return (
    <div className="px-2 pt-[73px] h-full border-r-2 bg-brandBlackBg1 flex justify-center items-start border-white overflow-auto">
      <div className="flex flex-col w-full  items-center mb-[30px] pt-[20px] h-full ">
        {pannelContents.map((val, index) => {
          console.log("name is", val.SVG, val);
          const isSlectedPane = val.SVG === selectedPane;
          return (
            <PannelItem
              name={val.SVG}
              desc={val.desc}
              marginTop={val.marginTop}
              id={index}
              updateSelectedPane={updateSelectedPane}
              isSlectedPane={isSlectedPane}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PrimaryPanel;
