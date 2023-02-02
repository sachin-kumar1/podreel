import React from "react";

const ToggleSwitchText = ({
  option1,
  option2,
  isOn,
  handleToggle,
  onColor,
}) => {
  return (
    <div class="relative max-w-max mb-5 py-2  bg-white rounded-full text-black ">
      <div
        class={`  rounded-full duration-300 transition-all ease-linear z-[5]  absolute  top-0 bg-brandBlue w-1/2 h-full
      ${!isOn ? "-right-[1px]" : " right-[50.5%]"}
      `}
      />
      <div className=" h-full  grid grid-cols-2  relative z-10">
        <div
          class={`text-[13px] text-center px-4 rounded-xl cursor-pointer ${
            !isOn ? "text-brandBlue" : "text-white"
          }`}
          onClick={() => handleToggle(!isOn)}
        >
          {option1}
        </div>
        <div
          class={`text-[13px] text-center  px-4 rounded-xl cursor-pointer ${
            isOn ? "text-brandBlue" : "text-white"
          }`}
          onClick={() => handleToggle(!isOn)}
        >
          {option2}
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitchText;
