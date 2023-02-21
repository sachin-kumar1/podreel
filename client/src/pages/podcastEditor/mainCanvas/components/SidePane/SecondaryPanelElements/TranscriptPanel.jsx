import React, { useState } from "react";

const TranscriptPanel = ({ addElementToCanvas }) => {
  const [isOn, setIsOn] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className="text-white w-full px-11 py-[33px] ">
      <div className="flex flex-row">
        <h1 className="font-medium text-[28px] leading-[49px]">Transcript</h1>
        {/* Toggle switch */}
        <div className="flex flex-row items-center">
          <label class="inline-flex relative items-center mr-5 ml-4 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer "
              checked={isOn}
              readOnly
            />
            <div
              onClick={() => {
                setIsOn(!isOn);
                showTranscript && setShowTranscript(false);
              }}
              className="w-11 h-6  bg-gray-200 rounded-full peer  peer-focus:ring-brandPurple  peer-checked:after:translate-x-full peer-checked:after:border-brandPurple  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-brandPurple after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brandPurple"
            ></div>
          </label>
        </div>
      </div>
      {/* Transcript text area */}
      {isOn && (
        <div className="mt-5">
          <textarea
            className="w-full h-[480px] bg-white rounded-[4px] py-2 pl-5 pr-4 text-xl leading-9 text-[#232d42] "
            placeholder="Type your transcript here"
          ></textarea>

          {/* Finalize button */}
          <button
            className="w-40 mt-4 text-lg  bg-brandBlue py-[5px] text-center rounded"
            onClick={async () => {
              await addElementToCanvas("transcript");
            }}
          >
            Edit Transcript
          </button>
        </div>
      )}
    </div>
  );
};

export default TranscriptPanel;
