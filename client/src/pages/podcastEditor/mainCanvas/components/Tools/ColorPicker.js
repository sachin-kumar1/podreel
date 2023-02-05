import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import EyeDropper from "react-eyedropper";
const ColorPicker = ({ className, color, setColor }) => {
  const [eyedropper, setEyedropper] = useState("");
  const [colorHistory, setColorHistory] = useState([
    "#000000",
    "#fe5986",
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#fe5986",
    "#9c0101",
    "#00ff00",
    "#0000ff",
    "#4613c8",
    "#000000",
    "#fe5986",
    "#ff0000",
  ]);

  return (
    <div className="bg-white border-2 border-black w-[274px] p-[20px] rounded-sm">
      <HexColorPicker
        className={" w-[230px] " + className}
        color={color}
        onChange={setColor}
      />
      {/* stupid line */}
      <div className=" h-[1px] bg-[#D9D9D9] absolute  w-[230px] -mt-[15px]" />
      {/* color hex display */}
      <div class="my-[12px] w-full rounded-sm flex justify-between border-1 border-[#BDBDBD]">
        <div
          className="w-[52px] h-[42px] rounded-sm border-r-2 border-[#BDBDBD]"
          style={{ backgroundColor: color }}
        ></div>
        <div class="px-[25px] text-black text-center flex items-center">
          {color}
        </div>
        <div className="w-[52px] bg-pink-300 h-[42px] rounded-sm border-l-2 border-[#BDBDBD]">
          {/* eye dropper */}
          {/* <EyeDropper initializedColor={eyedropper} /> */}
        </div>
      </div>
      {/* stupid line */}
      <div className=" h-[1px] bg-[#D9D9D9]   w-[230px] mt-[15px]" />
      {/* color history */}
      <div class="grid grid-cols-6 gap-1 items-center justify-between  my-4 w-full">
        {colorHistory.map((color, index) => {
          return (
            <div className="">
              <div
                key={index}
                className="  cursor-pointer w-[28px]  my-1 h-[28px] rounded-sm"
                onClick={() => {
                  setColor(color);
                }}
                style={{ backgroundColor: color }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
