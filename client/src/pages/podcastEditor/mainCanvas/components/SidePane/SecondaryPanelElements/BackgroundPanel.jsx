import React from "react";

const BackgroundPanel = ({ addElementToCanvas }) => {
  return (
    <div className="text-white w-full px-11 py-[33px] ">
      <div className="text-[28px] ">Background settings</div>
      <div>
        {/* Solid Color */}
        <div
          className="cursor-pointer my-[30px] text-xl  bg-brandBlue py-[8px] text-center rounded"
          onClick={async () => {
            await addElementToCanvas("backgroundColor");
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
          }}
        />

        {/* Gradient Color */}
        <div
          className="cursor-pointer mb-[30px] text-xl  bg-gradient-to-r from-[#FC354C] to-[#3733E0] py-[8px] text-center rounded"
          onClick={async () => {
            await addElementToCanvas("backgroundColor");
          }}
        >
          Add gradient color
        </div>
      </div>
    </div>
  );
};

export default BackgroundPanel;
