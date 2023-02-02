import React, { useState } from "react";
import CircleShape from "../../Shapes/CircleShape";
import SquareShape from "../../Shapes/SquareShape";
import { ToggleSwitchText } from "../../Tools";
import { HexColorPicker } from "react-colorful";
const shapes = [
  {
    name: "square",
    component: <SquareShape width={90} height={90} />,
  },
  {
    name: "circle",
    component: <CircleShape width={90} height={90} />,
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
  return (
    <div className="text-white w-full px-11 pt-[64px]">
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
            <div></div>
          )}
        </div>
      ) : (
        // editing shape
        <div className="text-white">
          <div
            className="rounded-sm bg-brandBlackBg3 max-w-max text-white text-xl px-3 py-2 cursor-pointer"
            onClick={() => setShapeSelect(false)}
          >
            {"<"} Back to Elements
          </div>
          {enableSolidColors ? (
            <div>
              {/* editing colors for solid colored shapes */}

              <div className="text-lg mt-8 mb-3">Shape Color</div>
              <div className="flex flex-col py-[20px] px-9 bg-white rounded-md">
                <div className="w-full flex">
                  <div
                    className={`w-10 h-10 rounded-full ml-3 mr-10 cursor-pointer `}
                    style={{ backgroundColor: solidShapeColor }}
                    onClick={() =>
                      setShowSolidShapeColorPicker(!showSolidShapeColorPicker)
                    }
                  />
                  <input
                    value={solidShapeColor}
                    onChange={(e) => setSolidShapeColor(e.target.value)}
                    className="border-1 text-black rounded-md w-[90px] px-2 py-2"
                  />
                </div>
                {showSolidShapeColorPicker && (
                  <HexColorPicker
                    className="mt-4 fixed"
                    color={solidShapeColor}
                    onChange={setSolidShapeColor}
                  />
                )}
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
              )}
            </div>
          ) : (
            // editing colors for gradient shapes
            <div>
              <div className=" text-xl mt-16">Customize Gradient</div>
              <div className="text-lg mt-8">Gradient Colors</div>
              <div className="flex items-center"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShapePanel;
