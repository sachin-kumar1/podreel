import React from "react";
import bar from "./colorBar.png";

const TextFormatBar = ({ show }) => {
  // Temporary hardcoded fonts and weights (Replace later)
  const fonts = ["Inter", "Roboto", "Arial", "Arial Black"];
  const weights = ["Thin", "Light", "Regular"];
  const size = [
    "14",
    "16",
    "18",
    "24",
    "28",
    "30",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
  ];
  // End of temp data

  // To Do: Only set this to true when text and Transcript is selected
  const [showTextFormatBar, setShowTextFormatBar] = React.useState(true);
  // Video Duration in seconds (hard coded for now)
  const [videoDuration, setVideoDuration] = React.useState(100);

  // Fonts according to search query
  const [searchFonts, setSearchFonts] = React.useState(fonts);

  // Menu States
  const [font, setFont] = React.useState(fonts[0]);
  const [weight, setWeight] = React.useState(weights[2]);
  const [fontSize, setFontSize] = React.useState(size[0]);
  const [isBold, setIsBold] = React.useState(false);
  const [textColor, setTextColor] = React.useState("#000000");
  const [alignment, setAlignment] = React.useState("left");
  const [verticalAlignment, setVerticalAlignment] = React.useState("top");

  // Dropdown States
  const [showFontDropdown, setShowFontDropdown] = React.useState(false);
  const [showWeightDropdown, setShowWeightDropdown] = React.useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = React.useState(false);

  return (
    <div>
      <div className="w-full z-20 absolute top-[73px] h-[50px] bg-white pl-[560px] py-2 flex flex-row-reverse items-center justify-between">
        {/* Video Duration */}
        <div className="h-full mr-3 leading-7 font-jet">{`${Math.trunc(
          videoDuration / 60
        )}M ${videoDuration % 60}S`}</div>

        {/* Text Manipulation Tools */}
        {showTextFormatBar && (
          <div className="h-full flex flex-row items-center gap-2">
            {/* Multi level dropdown for font and weight */}
            <button
              className="h-full relative w-52 flex flex-row items-center justify-between gap-2 px-2 rounded-md border border-gray-300"
              onClick={() => {
                setShowFontDropdown(!showFontDropdown);
                setShowSizeDropdown(false);
              }}
            >
              {font}
              {/* Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 7a1 1 0 011.707 0L10 10.586 13.293 7A1 1 0 1114.707 8.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 015 7z"
                  clipRule="evenodd"
                />
              </svg>
              {showFontDropdown && (
                <FontDropdown
                  fonts={fonts}
                  setFont={setFont}
                  weights={weights}
                  setWeight={setWeight}
                  setShowFontDropdown={setShowFontDropdown}
                  setShowWeightDropdown={setShowWeightDropdown}
                  showWeightDropdown={showWeightDropdown}
                />
              )}
            </button>

            {/* Font Size */}
            <button
              className="h-full relative w-16 flex flex-row items-center justify-between gap-2 px-2 rounded-md border border-gray-300"
              onClick={() => {
                setShowSizeDropdown(!showSizeDropdown);
                setShowFontDropdown(false);
              }}
            >
              {fontSize}
              {/* Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 7a1 1 0 011.707 0L10 10.586 13.293 7A1 1 0 1114.707 8.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 015 7z"
                  clipRule="evenodd"
                />
              </svg>
              {showSizeDropdown && (
                <SizeDropdown
                  size={size}
                  setFontSize={setFontSize}
                  setShowSizeDropdown={setShowSizeDropdown}
                />
              )}
            </button>

            {/* Bold */}
            <button
              className={`${
                isBold ? "bg-[#7400B81A]" : "transparent"
              } h-full border-0 flex flex-row items-center justify-center gap-2 px-2 rounded-md`}
              onClick={() => {
                setIsBold(!isBold);
              }}
            >
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.57845 21C1.65212 21 0.9884 20.7947 0.587323 20.384C0.195767 19.9638 0 19.3002 0 18.393V2.6071C0 1.68077 0.20055 1.01705 0.601627 0.615953C1.01227 0.20531 1.6712 0 2.57845 0C5.66396 0 9.93045 0 11.7332 0C14.3204 0 16.4591 2.29024 16.4591 5.0974C16.4591 7.19836 15.4086 8.90995 13.3076 9.88405C16.02 10.3799 17.5411 13.1317 17.5411 15.123C17.5411 17.5292 16.3105 21 12.3138 21C11.1473 21 5.66127 21 2.57845 21ZM10.2175 11.6746H4.2V17.8057H10.2175C11.4333 17.8057 13.1357 16.6159 13.1357 14.6971C13.1357 12.7783 11.4333 11.6746 10.2175 11.6746ZM4.2 3.1944V8.62346H9.75261C10.5911 8.62346 12.3138 7.83858 12.3138 5.83338C12.3138 3.82816 10.4544 3.1944 9.75261 3.1944H4.2Z"
                  fill={isBold ? "#7400B8" : "black"}
                />
              </svg>
            </button>

            {/* Text Color */}
            <button
              className="border-0 flex flex-col items-center justify-around rounded-md"
              onClick={() => {
                // Open Color Picker
              }}
            >
              <p className="text-3xl">A</p>
              <img height="5px" src={bar} alt="colorbar" />
            </button>

            {/* Alignment */}
            <button
              className="h-full border-1 w-[50px] flex flex-row items-center justify-center gap-2 px-[10px] py-2 rounded-md"
              onClick={() => {
                // Open Alignment Dropdown
              }}
            >
              <svg
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 1.66667C0 0.7462 0.610527 0 1.36364 0H28.6364C29.3894 0 30 0.7462 30 1.66667C30 2.58713 29.3894 3.33333 28.6364 3.33333H1.36364C0.610527 3.33333 0 2.58713 0 1.66667ZM0 11.6667C0 10.7462 0.610527 10 1.36364 10H15C15.7531 10 16.3636 10.7462 16.3636 11.6667C16.3636 12.5871 15.7531 13.3333 15 13.3333H1.36364C0.610527 13.3333 0 12.5871 0 11.6667ZM0 21.6667C0 20.7463 0.610527 20 1.36364 20H23.1818C23.9348 20 24.5455 20.7463 24.5455 21.6667C24.5455 22.587 23.9348 23.3333 23.1818 23.3333H1.36364C0.610527 23.3333 0 22.587 0 21.6667Z"
                  fill="black"
                />
              </svg>
            </button>

            {/* Line Spacing */}
            <button
              className="h-full border-1 w-[50px] flex flex-row items-center justify-center gap-2 px-[10px] py-2 rounded-md"
              onClick={() => {
                // Open Line Spacing Dropdown
              }}
            >
              <svg
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.4041 0.292874C5.253 0.105349 5.04805 0 4.83437 0C4.62067 0 4.41573 0.105349 4.26462 0.292874L0.235992 5.29287C-0.0786438 5.68339 -0.0786438 6.31656 0.235992 6.70709C0.550648 7.09761 1.06081 7.09761 1.37547 6.70709L4.02864 3.41419V23.5858L1.37547 20.2928C1.06081 19.9023 0.550648 19.9023 0.235992 20.2928C-0.078664 20.6833 -0.078664 21.3165 0.235992 21.707L4.26462 26.707C4.41573 26.8945 4.62067 27 4.83437 27C5.04805 27 5.25298 26.8945 5.4041 26.707L9.43272 21.707C9.74738 21.3165 9.74738 20.6833 9.43272 20.2928C9.11807 19.9023 8.6079 19.9023 8.29325 20.2928L5.64009 23.5858V3.41419L8.29325 6.70709C8.6079 7.09761 9.11807 7.09761 9.43272 6.70709C9.74738 6.31656 9.74738 5.68339 9.43272 5.29287L5.4041 0.292874ZM14.9069 4.74997C14.3507 4.74997 13.8998 5.30959 13.8998 5.99996C13.8998 6.69031 14.3507 7.24996 14.9069 7.24996H26.9928C27.549 7.24996 28 6.69031 28 5.99996C28 5.30959 27.549 4.74997 26.9928 4.74997H14.9069ZM13.8998 13.5C13.8998 12.8096 14.3507 12.25 14.9069 12.25H26.9928C27.549 12.25 28 12.8096 28 13.5C28 14.1903 27.549 14.7499 26.9928 14.7499H14.9069C14.3507 14.7499 13.8998 14.1903 13.8998 13.5ZM14.9069 19.7499C14.3507 19.7499 13.8998 20.3095 13.8998 21C13.8998 21.6903 14.3507 22.25 14.9069 22.25H26.9928C27.549 22.25 28 21.6903 28 21C28 20.3095 27.549 19.7499 26.9928 19.7499H14.9069Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextFormatBar;

const FontDropdown = ({
  fonts,
  setFont,
  weights,
  setWeight,
  setShowFontDropdown,
  setShowWeightDropdown,
  showWeightDropdown,
}) => {
  return (
    <div className=" absolute z-10 left-0 top-[35px] w-52 shadow-2xl">
      {/* Search item */}
      <div className="h-[44px] flex flex-row bg-[#F8F9FA] items-center gap-3 justify-between px-2 rounded-t-md">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.0909 7.36364C13.0909 10.5267 10.5267 13.0909 7.36364 13.0909C4.20055 13.0909 1.63636 10.5267 1.63636 7.36364C1.63636 4.20055 4.20055 1.63636 7.36364 1.63636C10.5267 1.63636 13.0909 4.20055 13.0909 7.36364ZM11.9599 13.1169C10.7002 14.1248 9.10229 14.7273 7.36364 14.7273C3.29681 14.7273 0 11.4305 0 7.36364C0 3.29681 3.29681 0 7.36364 0C11.4305 0 14.7273 3.29681 14.7273 7.36364C14.7273 9.10229 14.1248 10.7002 13.1169 11.9599L17.7604 16.6032C18.0799 16.9228 18.0799 17.4409 17.7604 17.7604C17.4409 18.0799 16.9228 18.0799 16.6032 17.7604L11.9599 13.1169Z"
            fill="#5E60CE"
          />
        </svg>
        <input
          type="text"
          placeholder="Search fonts.."
          className="w-full bg-[#F8F9FA] focus:outline-none"
          onChange={(e) => {
            // Add search functionality here
          }}
        />
      </div>

      {fonts.slice(0, -1).map((font) => (
        <div
          key={font}
          className="h-[44px] flex flex-row items-center bg-[#F8F9FA]  justify-between px-2 hover:bg-[#3A57E8] hover:text-white"
          onClick={() => {
            setFont(font);
          }}
        >
          {font}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 -rotate-90"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 7a1 1 0 011.707 0L10 10.586 13.293 7A1 1 0 1114.707 8.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 015 7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ))}
      <div
        className="h-[44px] flex flex-row bg-[#F8F9FA]  items-center justify-between px-2 hover:bg-[#3A57E8] hover:text-white rounded-b-md"
        onClick={() => {
          setFont(fonts[fonts.length - 1]);
        }}
      >
        {fonts[fonts.length - 1]}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 -rotate-90"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 7a1 1 0 011.707 0L10 10.586 13.293 7A1 1 0 1114.707 8.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 015 7z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <WeightDropdown
        weights={weights}
        setWeight={setWeight}
        setFont={setFont}
        setShowFontDropdown={setShowFontDropdown}
        setShowWeightDropdown={setShowWeightDropdown}
      />
    </div>
  );
};

const WeightDropdown = ({
  weights,
  setWeight,
  setFont,
  setShowFontDropdown,
  setShowWeightDropdown,
  font,
}) => {
  return (
    <div className=" absolute z-10 left-52 ml-1 top-[0px] w-52 shadow-2xl">
      <div
        className="h-[50px] flex flex-row bg-[#F8F9FA] items-center px-2 hover:bg-[#3A57E8] hover:text-white rounded-t-md"
        onClick={() => {
          setShowWeightDropdown(false);
          setShowFontDropdown(false);
          setWeight(weights[0]);
          setFont(font);
        }}
      >
        {weights[0]}
      </div>
      {weights.slice(1, -1).map((weight) => (
        <div
          key={weight}
          className="h-[50px] flex flex-row bg-[#F8F9FA] items-center px-2 hover:bg-[#3A57E8] hover:text-white"
          onClick={() => {
            setShowWeightDropdown(false);
            setShowFontDropdown(false);
            setWeight(weight);
            setFont(font);
          }}
        >
          {weight}
        </div>
      ))}
      <div
        className="h-[50px] flex flex-row bg-[#F8F9FA] items-center px-2 hover:bg-[#3A57E8] hover:text-white rounded-b-md"
        onClick={() => {
          setShowWeightDropdown(false);
          setShowFontDropdown(false);
          setWeight(weights[weights.length - 1]);
          setFont(font);
        }}
      >
        {weights[weights.length - 1]}
      </div>
    </div>
  );
};

const SizeDropdown = ({ size, setFontSize, setShowSizeDropdown }) => {
  return (
    <div className=" absolute -left-0 z-10 top-[35px] w-16 border-gray-300">
      {/* First item with rounded top corners */}
      <div
        className="h-[44px] flex flex-row bg-[#F8F9FA] items-center px-2 hover:bg-[#3A57E8] hover:text-white rounded-t-md"
        onClick={() => {
          setShowSizeDropdown(false);
          setFontSize(size[0]);
        }}
      >
        {size[0]}
      </div>

      {size.slice(1, -1).map((size) => (
        <div
          key={size}
          className="h-[44px] flex flex-row bg-[#F8F9FA] items-center px-2 hover:bg-[#3A57E8] hover:text-white"
          onClick={() => {
            setShowSizeDropdown(false);
            setFontSize(size);
          }}
        >
          {size}
        </div>
      ))}

      {/* Last item with rounded bottom corners */}
      <div
        className="h-[44px] flex flex-row bg-[#F8F9FA] items-center px-2 hover:bg-[#3A57E8] hover:text-white rounded-b-md"
        onClick={() => {
          setShowSizeDropdown(false);
          setFontSize(size[size.length - 1]);
        }}
      >
        {size[size.length - 1]}
      </div>
    </div>
  );
};
