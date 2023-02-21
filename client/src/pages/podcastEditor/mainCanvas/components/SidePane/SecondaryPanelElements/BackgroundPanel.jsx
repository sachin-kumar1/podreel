import React, { useState } from "react";
import { ColorPicker } from "../../Tools";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AiOutlineInfoCircle } from "react-icons/ai";

const BackgroundPanel = ({ addElementToCanvas }) => {
  const [home, setHome] = useState(true);
  const [enableSolidColors, setEnableSolidColors] = useState(false);
  const [enableGradientColors, setEnableGradientColors] = useState(false);
  const [enableBackgroundImage, setEnableBackgroundImage] = useState(false);
  const [solidShapeColor, setSolidShapeColor] = useState("#000000");
  const [showSolidShapeColorPicker, setShowSolidShapeColorPicker] =
    useState(false);
  const [gradientColor1, GradientColor1] = useState("#962FBF");
  const [gradientColor2, GradientColor2] = useState("#D62976");
  const [showGradientColor1Picker, setShowGradientColor1Picker] =
    useState(false);
  const [showGradientColor2Picker, setShowGradientColor2Picker] =
    useState(false);
  const [showOverlayColor, setShowOverlayColor] = useState(false);
  const [gradientAngle, setGradientAngle] = useState(0);
  const [overlayColor, setOverlayColor] = useState("#962FBF");
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const HideColorPicker = () => {
    setShowGradientColor1Picker(false);
    setShowGradientColor2Picker(false);
    setShowOverlayColor(false);
    setShowSolidShapeColorPicker(false);
  };
  return (
    <div className="text-white w-full px-11 py-[33px] ">
      <div className="absolute left-[555px]">
        {showSolidShapeColorPicker && (
          <ColorPicker
            className="   "
            color={solidShapeColor}
            setColor={setSolidShapeColor}
          />
        )}
        {showGradientColor1Picker && (
          <ColorPicker
            className="   "
            color={gradientColor1}
            setColor={GradientColor1}
          />
        )}
        {showGradientColor2Picker && (
          <ColorPicker
            className="   "
            color={gradientColor2}
            setColor={GradientColor2}
          />
        )}
        {showOverlayColor && (
          <ColorPicker
            className="   "
            color={overlayColor}
            setColor={setOverlayColor}
          />
        )}
      </div>
      {enableSolidColors && (
        <div className="relative">
          <div
            className="rounded-sm bg-brandBlackBg3 max-w-max text-white text-xl px-3 py-2 cursor-pointer"
            onClick={() => {
              setShowSolidShapeColorPicker(false);
              setEnableSolidColors(false);
              HideColorPicker();
              setHome(true);
            }}
          >
            {"<"} Back to Elements
          </div>
          {/* editing colors for solid colored shapes */}
          <div className="flex items-center mt-8 mb-3">
            <div className="text-xl ">Shape Color</div>
            <label class="inline-flex relative items-center mr-5 ml-4 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer "
                checked={enableSolidColors}
                readOnly
              />
              <div
                onClick={() => {
                  setHome(true);
                  HideColorPicker();
                  setEnableSolidColors(!enableSolidColors);
                }}
                className="w-11 h-6  bg-gray-200 rounded-full peer  peer-focus:ring-brandPurple  peer-checked:after:translate-x-full peer-checked:after:border-brandPurple  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-brandPurple after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brandPurple"
              ></div>
            </label>
          </div>
          <div className="flex flex-col py-[20px] px-9 bg-white rounded-md">
            <div className="w-full flex">
              <div
                className={`w-10 h-10 rounded-full ml-3 mr-10 cursor-pointer `}
                style={{ backgroundColor: solidShapeColor }}
                onClick={() => {
                  setShowSolidShapeColorPicker(!showSolidShapeColorPicker);
                }}
              />
              <input
                value={solidShapeColor}
                onChange={(e) => setSolidShapeColor(e.target.value)}
                className="border-1 text-black rounded-md w-[90px] px-2 py-2"
              />
            </div>
          </div>
        </div>
      )}
      {enableGradientColors && (
        <div>
          <div
            className="rounded-sm bg-brandBlackBg3 max-w-max text-white text-xl px-3 py-2 cursor-pointer"
            onClick={() => {
              setShowGradientColor1Picker(false);
              setShowGradientColor2Picker(false);
              setEnableGradientColors(false);
              setHome(true);
            }}
          >
            {"<"} Back to Elements
          </div>
          <div className="  mt-16 flex items-center">
            <div className="text-xl">Gradient Background </div>
            <label class="inline-flex relative items-center mr-5 ml-4 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer "
                checked={enableGradientColors}
                readOnly
              />
              <div
                onClick={() => {
                  setHome(true);
                  HideColorPicker();
                  setEnableGradientColors(!enableGradientColors);
                }}
                className="w-11 h-6  bg-gray-200 rounded-full peer  peer-focus:ring-brandPurple  peer-checked:after:translate-x-full peer-checked:after:border-brandPurple  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-brandPurple after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brandPurple"
              ></div>
            </label>
          </div>
          {/* gradient colors */}
          <div className="text-lg mt-8">Gradient Colors</div>
          <div className="flex items-center mt-3 first-letter:">
            <div
              className={`w-10 h-10 rounded-sm  border-1 border-white  mr-[20px] cursor-pointer `}
              style={{
                background: gradientColor1,
              }}
              onClick={() => {
                setShowGradientColor1Picker(!showGradientColor1Picker);
                setShowGradientColor2Picker(false);
                setShowSolidShapeColorPicker(false);
              }}
            />
            <div
              className={`w-10 h-10 rounded-sm  border-1 border-white   cursor-pointer `}
              style={{
                background: gradientColor2,
              }}
              onClick={() => {
                setShowGradientColor2Picker(!showGradientColor2Picker);
                setShowGradientColor1Picker(false);
                setShowSolidShapeColorPicker(false);
              }}
            />
          </div>
          {/* gradient direction */}
          <div className="flex items-center mt-[35px]">
            <div
              onClick={() => {
                // change direction of gradient
                setGradientAngle(gradientAngle + 45);
              }}
              className="bg-brandBlue active:bg-blue-500 cursor-pointer px-[12px] text-white   py-[8px] rounded max-w-max"
            >
              Change gradient Angles
            </div>
            <AiOutlineInfoCircle
              id="change-gradient-angle-tooltip"
              className="text-white ml-2 cursor-pointer outline-none "
              data-tooltip-html={`<div className="bg-white rounded-md text-black px-1 py-1">Changes gradient appearance. Try it out :)</div>`}
            />
            <Tooltip
              place="top"
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "5px",
                opacity: "1",
                padding: "8px",
              }}
              anchorId="change-gradient-angle-tooltip"
            />
          </div>
        </div>
      )}
      {enableBackgroundImage && (
        <div>
          <div
            className="rounded-sm bg-brandBlackBg3 max-w-max text-white text-xl px-3 py-2 cursor-pointer"
            onClick={() => {
              setEnableBackgroundImage(false);
              setHome(true);
            }}
          >
            {"<"} Back to Elements
          </div>
          <div className="  mt-16 flex items-center">
            <div className="text-xl">Background Image </div>
            <label class="inline-flex relative items-center mr-5 ml-4 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer "
                checked={enableBackgroundImage}
                readOnly
              />
              <div
                onClick={() => {
                  setHome(true);
                  HideColorPicker();
                  setEnableBackgroundImage(!enableBackgroundImage);
                }}
                className="w-11 h-6  bg-gray-200 rounded-full peer  peer-focus:ring-brandPurple  peer-checked:after:translate-x-full peer-checked:after:border-brandPurple  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-brandPurple after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brandPurple"
              ></div>
            </label>
          </div>
          <div className="text-lg mt-8 mb-3">Shape Color</div>
          <div className="flex flex-col py-[20px] px-9 bg-white rounded-md">
            <div className="w-full flex">
              <div
                className={`w-10 h-10 rounded-full ml-3 mr-10 cursor-pointer `}
                style={{ backgroundColor: overlayColor }}
                onClick={() => {
                  setShowOverlayColor(!showOverlayColor);
                }}
              />
              <input
                value={overlayColor}
                onChange={(e) => setOverlayColor(e.target.value)}
                className="border-1 text-black rounded-md w-[90px] px-2 py-2"
              />
            </div>

            <div className="w-full h-[1px] my-4 bg-brandGray1 " />
            <div className="flex items-center">
              <div className="text-black">Opacity</div>
              <input
                type="range"
                min="0"
                max="100"
                value={overlayOpacity}
                onChange={(e) => setOverlayOpacity(e.target.value)}
                className=" ml-10 py-1cursor-pointer w-[100px]"
                id="myRange"
              />
              <div className="ml-4 text-black">{overlayOpacity}%</div>
            </div>
          </div>
        </div>
      )}
      {home && (
        <div>
          <div className="text-[28px] ">Background settings</div>
          <div>
            {/* Solid Color */}
            <div
              className="cursor-pointer my-[30px] text-xl  bg-brandBlue py-[8px] text-center rounded"
              onClick={async () => {
                await addElementToCanvas("backgroundColor");
                setEnableSolidColors(true);
                setHome(false);
              }}
            >
              Add solid color
            </div>

            {/* Background Image */}
            <label for="bgUpload">
              <div
                className="cursor-pointer  bg-cover bg-center bg-no-repeat my-[30px] text-xl  bg-brandBlue py-[8px] text-center rounded"
                style={{
                  border: ".5px solid #fff",
                  backgroundImage: `url("https://images.unsplash.com/photo-1670801900757-679d1e46afbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80")`,
                }}
              >
                Add background image
              </div>
            </label>
            <input
              type="file"
              id="bgUpload"
              className="hidden"
              onChange={async (e) => {
                await addElementToCanvas("backgroundColor");
                setEnableBackgroundImage(true);
                setHome(false);
              }}
            />

            {/* Gradient Color */}
            <div
              className="cursor-pointer mb-[30px] text-xl  bg-gradient-to-r from-[#FC354C] to-[#3733E0] py-[8px] text-center rounded"
              onClick={async () => {
                setHome(false);
                setEnableGradientColors(true);

                await addElementToCanvas("backgroundColor");
              }}
            >
              Add gradient color
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundPanel;
