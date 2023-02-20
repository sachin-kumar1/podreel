import React from "react";
import { pannelContents } from "./constants";
//  icons
import {
  TemplateBlack,
  TemplateGray,
  ElementsGray,
  ElementsBlack,
  TextGray,
  TextBlack,
  PhotosBlack,
  PhotosGray,
  BgBlack,
  BgGray,
  CCBlack,
  CCGray,
  PlayBlack,
  PlayGray,
} from "../SidePane/icons";

const PannelItem = ({
  name,
  marginTop,
  desc,
  updateSelectedPane,
  isSlectedPane,
}) => {
  const getSVGComponent = (name, color = "gray") => {
    console.log("CALLED HERE 1 NAME", name, name === "Elements");

    if (color === "black")
      switch (name) {
        case "Templates":
          return TemplateBlack;
        case "Elements":
          return ElementsBlack;
        case "Text":
          return TextBlack;
        case "Photos":
          return PhotosBlack;
        case "Transcript":
          return CCBlack;
        case "Background":
          return BgBlack;
      }
    else if (color === "gray")
      switch (name) {
        case "Templates":
          return TemplateGray;
        case "Elements":
          return ElementsGray;
        case "Text":
          return TextGray;
        case "Photos":
          return PhotosGray;
        case "Transcript":
          return CCGray;
        case "Background":
          return BgGray;
      }
  };
  let color = isSlectedPane ? "black" : "gray";
  const SVGToRender = getSVGComponent(name, color);

  return (
    <div
      onClick={() => {
        updateSelectedPane(name);
      }}
      className={`cursor-pointer flex flex-col items-center justify-center py-3 px-2 w-full   ${
        isSlectedPane && "border-r-4 border-[#D9D9D9]"
      }`}
    >
      <div
        className={` px-1 rounded-[19px]`.concat(
          isSlectedPane ? " bg-white " : " "
        )}
      >
        <SVGToRender className="  " />
      </div>

      <div className=" text-sm text-centers mt-1" style={{ color: "white" }}>
        {desc}
      </div>
    </div>
  );
};

const PrimaryPanel = ({ selectedPane, updateSelectedPane }) => {
  return (
    <div class=" bg-brandBlackBg1 h-full">
      <div
        id="primary-panel"
        className="   pt-[73px] h-full border-r-2 w-full  flex justify-center items-start border-white overflow-auto font-inter  "
      >
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
    </div>
  );
};

export default PrimaryPanel;
