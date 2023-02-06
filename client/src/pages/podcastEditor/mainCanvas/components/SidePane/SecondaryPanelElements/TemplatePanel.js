import React from "react";
import { useState } from "react";
import { templates } from "../constants";
import { BsPaletteFill } from "react-icons/bs";
const TemplatePanel = ({ addElementToCanvas }) => {
  const [first, setfirst] = useState();
  const [displayPrompt, setDisplayPrompt] = useState(true);
  return (
    <div className="text-white w-full px-11 py-[33px] ">
      {templates.map((template, index) => {
        return (
          <div className="flex flex-col mb-[64px]">
            <div className="text-2xl font-sans ">{template.name}</div>
            <div className="flex flex-row flex-wrap w-full justify-between">
              {template.templates.map((template, index) => {
                return (
                  <div
                    key={`template-index-${template.name}}`}
                    className="flex flex-col items-center justify-center "
                    onClick={() => console.log(template)}
                  >
                    <div
                      className="w-40 h-40 bg-cover relative bg-center  mt-5  flex bg-black"
                      style={{
                        backgroundImage: `url(${template.image})`,
                      }}
                    >
                      <div class="absolute template-section-template px-[13px] opacity-0 hover:opacity-100 bg-black/30   w-full h-full flex justify-center items-center  ">
                        <div class="p-2 cursor-pointer rounded-[50px] w-full bg-brandPurple text-center items-center">
                          Use Template
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      {/* dont like template prompt */}
      {displayPrompt && (
        <div class="chat-bb-temp bg-brandBlue rounded-2xl px-[20px] py-[23px] text-white absolute w-[400px] h-[200px] top-[150px]  left-[555px]">
          <div class="text-2xl">
            <BsPaletteFill className="inline-block mr-2" />
            Don't like the template?
          </div>
          <div class="text-base my-4">
            Choose from over 15+ professional templates here. Customize however
            you want!
          </div>
          <div class="w-full flex justify-end">
            <div
              onClick={() => setDisplayPrompt(false)}
              class=" px-3 py-1 border-white border-2 rounded-md  cursor-pointer"
            >
              Got it
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplatePanel;
