import React from "react";

const TextPanel = ({ addElementToCanvas }) => {
  return (
    <div className="flex flex-col justify-center items-start px-6">
      <p className="text-white font-[500] text-[28px] leading-[44px]  mt-8">
        Add a text box by clicking any button below 👇
      </p>
      <div className="flex flex-col gap-9 w-full ">
        <button
          className="text-white font-[700] text-[28px] leading-[49px] mt-8 h-[65px] w-full border-1 border-[#646464] rounded-[4px]"
          onClick={async () => {
            await addElementToCanvas("heading");
          }}
        >
          <div className="h-full flex justify-center items-center">
            <p className="text-white font-[700] text-3xl leading-[44px]">
              Add a Heading
            </p>
          </div>
        </button>
        <button
          className="text-white font-[700] text-[28px] leading-[49px] h-[65px] w-full border-1 border-[#646464] rounded-[4px]"
          onClick={async () => {
            await addElementToCanvas("subHeading");
          }}
        >
          <div className="h-full flex justify-center items-center">
            <p className="text-white font-[400] text-lg leading-8">
              Add a subheading
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TextPanel;
