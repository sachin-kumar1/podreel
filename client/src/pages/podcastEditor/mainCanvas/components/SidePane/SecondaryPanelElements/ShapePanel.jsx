import React, { useState } from "react";
import CircleShape from "../../Shapes/CircleShape";
import SquareShape from "../../Shapes/SquareShape";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { ToggleSwitchText, ColorPicker } from "../../Tools";
// import { HexColorPicker } from "react-colorful";
import { AiOutlineInfoCircle } from "react-icons/ai";
const shapes = [
  {
    name: "square",
    // component: <SquareShape width={90} height={90} />,
    component: <div className="w-20 h-20 bg-red-500 rounded-md"></div>,
  },
  {
    name: "circle",
    // component: <CircleShape width={90} height={90} />,
    component: <div className="w-20 h-20 bg-blue-300 rounded-full"></div>,
  },
];
const gradientShapes = [
  {
    name: "square",
    // component: <SquareShape width={90} height={90} />,
    component: (
      <div className="w-20 h-20  bg-gradient-to-br from-red-500 to-yellow-500  rounded-md"></div>
    ),
  },
  {
    name: "circle",
    // component: <CircleShape width={90} height={90} />,
    component: (
      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-black-700 rounded-full"></div>
    ),
  },
];
const ShapePanel = ({ addElementToCanvas }) => {
  const [enableSolidColors, setEnableSolidColors] = useState(true);
  const [shapeSelect, setShapeSelect] = useState(false);
  const [solidShapeColor, setSolidShapeColor] = useState("#000000");
  const [showSolidShapeColorPicker, setShowSolidShapeColorPicker] =
    useState(false);
  const [solidShapeOpacity, setSolidShapeOpacity] = useState(100);
  const [enableBorder, setEnableBorder] = useState(false);
  const [borderColor, setBorderColor] = useState("#000000");
  const [showBorderColorPicker, setShowBorderColorPicker] = useState(false);
  const [borderThickness, setBorderThickness] = useState(1);
  const [gradientColor1, GradientColor1] = useState("#962FBF");
  const [gradientColor2, GradientColor2] = useState("#D62976");
  const [showGradientColor1Picker, setShowGradientColor1Picker] =
    useState(false);
  const [showGradientColor2Picker, setShowGradientColor2Picker] =
    useState(false);
  return (
    <div className="text-white w-full px-11 py-[64px] ">
      {shapeSelect && (
        <div className="absolute left-[555px]">
          {showSolidShapeColorPicker && (
            <ColorPicker
              className="   "
              color={solidShapeColor}
              setColor={setSolidShapeColor}
            />
          )}
          {showBorderColorPicker && (
            <ColorPicker
              className="   "
              color={borderColor}
              setColor={setBorderColor}
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
        </div>
      )}
      {!shapeSelect ? (
        <div>
          <div className="text-2xl font-sans  mb-[22px]">Shapes</div>
          {/* gradient toggle */}
          <div className=" ">
            <ToggleSwitchText
              option1={"Solid Colors"}
              option2={"Gradients"}
              isOn={enableSolidColors}
              handleToggle={setEnableSolidColors}
              onColor={"bg-brandPurple"}
            />
          </div>
          {/* display shapes  */}{" "}
          {enableSolidColors ? (
            // solid colors
            <div className=" grid grid-cols-3 gap-2  flex-wrap w-full justify-between">
              {shapes.map((shape) => (
                <div
                  className="w-full cursor-pointer"
                  onClick={() => {
                    setShapeSelect(true);
                    addElementToCanvas(shape.name);
                  }}
                >
                  {shape.component}
                </div>
              ))}
            </div>
          ) : (
            // gradient shapes
            <div className=" grid grid-cols-3 gap-2  flex-wrap w-full justify-between">
              {gradientShapes.map((shape) => (
                <div
                  className="w-full cursor-pointer"
                  onClick={() => {
                    setShapeSelect(true);
                    addElementToCanvas(shape.name);
                  }}
                >
                  {shape.component}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        // editing shape
        <div className="text-white">
          <div
            className="rounded-sm bg-brandBlackBg3 max-w-max text-white text-xl px-3 py-2 cursor-pointer"
            onClick={() => {
              setShowSolidShapeColorPicker(false);
              setShowBorderColorPicker(false);
              setShowGradientColor1Picker(false);
              setShowGradientColor2Picker(false);
              setShapeSelect(false);
            }}
          >
            {"<"} Back to Elements
          </div>
          {enableSolidColors ? (
            <div className="relative">
              {/* editing colors for solid colored shapes */}

              <div className="text-lg mt-8 mb-3">Shape Color</div>
              <div className="flex flex-col py-[20px] px-9 bg-white rounded-md">
                <div className="w-full flex">
                  <div
                    className={`w-10 h-10 rounded-full ml-3 mr-10 cursor-pointer `}
                    style={{ backgroundColor: solidShapeColor }}
                    onClick={() => {
                      setShowSolidShapeColorPicker(!showSolidShapeColorPicker);
                      setShowBorderColorPicker(false);
                      setShowGradientColor1Picker(false);
                      setShowGradientColor2Picker(false);
                    }}
                  />
                  <input
                    value={solidShapeColor}
                    onChange={(e) => setSolidShapeColor(e.target.value)}
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
                    value={solidShapeOpacity}
                    onChange={(e) => setSolidShapeOpacity(e.target.value)}
                    className=" ml-10 py-1cursor-pointer w-[100px]"
                    id="myRange"
                  />
                  <div className="ml-4 text-black">{solidShapeOpacity}%</div>
                </div>
              </div>
              {/* border */}
              <div className="  flex items-center text-lg mt-8 mb-3">
                <div>Border</div>
                <label class="inline-flex relative items-center mr-5 ml-4 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer "
                    checked={enableBorder}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setEnableBorder(!enableBorder);
                    }}
                    className="w-11 h-6  bg-gray-200 rounded-full peer  peer-focus:ring-brandPurple  peer-checked:after:translate-x-full peer-checked:after:border-brandPurple  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-brandPurple after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brandPurple"
                  ></div>
                </label>
              </div>
              {enableBorder && (
                <div>
                  <div className="flex flex-col py-[20px] px-9 bg-white rounded-md">
                    <div className="text-black">Thickness</div>
                    <div className="w-full flex items-center justify-between">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={borderThickness}
                        onChange={(e) => setBorderThickness(e.target.value)}
                        className="   cursor-pointer w-4/5"
                        id="myRange"
                      />
                      <input
                        value={borderThickness}
                        onChange={(e) => setBorderThickness(e.target.value)}
                        className="border-1 text-black rounded-md  ml-4 w-[50px] text-center p-1"
                      />
                    </div>
                  </div>
                  <div className="text-lg mt-8 mb-3">Border Color</div>
                  <div className="flex flex-col py-[20px] px-9 bg-white rounded-md">
                    <div className="w-full flex">
                      <div
                        className={`w-10 h-10 rounded-full ml-3 mr-10 cursor-pointer `}
                        style={{ backgroundColor: borderColor }}
                        onClick={() => {
                          setShowSolidShapeColorPicker(false);
                          setShowBorderColorPicker(!showBorderColorPicker);
                        }}
                      />
                      <input
                        value={borderColor}
                        onChange={(e) => setBorderColor(e.target.value)}
                        className="border-1 text-black rounded-md w-[90px] px-2 py-2"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // editing colors for gradient shapes
            <div>
              <div className=" text-xl mt-16">Customize Gradient</div>
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
                    setShowBorderColorPicker(false);
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
                    setShowBorderColorPicker(false);
                    setShowSolidShapeColorPicker(false);
                  }}
                />
              </div>
              {/* gradient direction */}
              <div className="flex items-center mt-[35px]">
                <div
                  onClick={() => {
                    // change direction of gradient
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
              {/* border  */}
              <div className="  flex items-center text-lg mt-8 mb-3">
                <div>Border</div>
                <label class="inline-flex relative items-center mr-5 ml-4 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer "
                    checked={enableBorder}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setEnableBorder(!enableBorder);
                    }}
                    className="w-11 h-6  bg-gray-200 rounded-full peer  peer-focus:ring-brandPurple  peer-checked:after:translate-x-full peer-checked:after:border-brandPurple  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-brandPurple after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brandPurple"
                  ></div>
                </label>
              </div>
              {enableBorder && (
                <div>
                  <div className="flex flex-col py-[20px] px-9 bg-white rounded-md">
                    <div className="text-black">Thickness</div>
                    <div className="w-full flex items-center justify-between">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={borderThickness}
                        onChange={(e) => setBorderThickness(e.target.value)}
                        className="   cursor-pointer w-4/5"
                        id="myRange"
                      />
                      <input
                        value={borderThickness}
                        onChange={(e) => setBorderThickness(e.target.value)}
                        className="border-1 text-black rounded-md  ml-4 w-[50px] text-center p-1"
                      />
                    </div>
                  </div>
                  <div className="text-lg mt-8 mb-3">Border Color</div>
                  <div className="flex flex-col py-[20px] px-9 bg-white rounded-md">
                    <div className="w-full flex">
                      <div
                        className={`w-10 h-10 rounded-full ml-3 mr-10 cursor-pointer `}
                        style={{ backgroundColor: borderColor }}
                        onClick={() => {
                          setShowSolidShapeColorPicker(false);
                          setShowBorderColorPicker(!showBorderColorPicker);
                          setShowGradientColor1Picker(false);
                          setShowGradientColor2Picker(false);
                        }}
                      />
                      <input
                        value={borderColor}
                        onChange={(e) => setBorderColor(e.target.value)}
                        className="border-1 text-black rounded-md w-[90px] px-2 py-2"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShapePanel;
