import React from "react";
import tmpgry from "./template-gray.svg";
import tmpblk from "./template-black.svg";
import elegry from "./Elements-gray.svg";
import eleblk from "./elements-black.svg";
import txtgry from "./text-gray.svg";
import txtblk from "./text-black.svg";
import phtgry from "./photos-gray.svg";
import phtblk from "./photos-black.svg";
import bggry from "./background-gray.svg";
import bgblk from "./background-black.svg";
import ccgry from "./cc-gray.svg";
import ccblk from "./cc-black.svg";
import playgry from "./play-gray.svg";
import playblk from "./play-black.svg";

const TemplateBlack = () => {
  return <img src={tmpblk} />;
};

const TemplateGray = () => {
  return <img src={tmpgry} />;
};
const ElementsGray = () => {
  return <img src={elegry} />;
};
const ElementsBlack = () => {
  return <img src={eleblk} />;
};
const TextGray = () => {
  return <img src={txtgry} />;
};
const TextBlack = () => {
  return <img src={txtblk} />;
};
const PhotosGray = () => {
  return <img src={phtgry} />;
};
const PhotosBlack = () => {
  return <img src={phtblk} />;
};
const BgGray = () => {
  return <img src={bggry} />;
};
const BgBlack = () => {
  return <img src={bgblk} />;
};
const CCGray = () => {
  return <img src={ccgry} />;
};
const CCBlack = () => {
  return <img src={ccblk} />;
};
const PlayGray = () => {
  return <img src={playgry} />;
};
const PlayBlack = () => {
  return <img src={playblk} />;
};

export {
  TemplateBlack,
  TemplateGray,
  ElementsGray,
  ElementsBlack,
  TextGray,
  TextBlack,
  PhotosBlack,
  PhotosGray,
  BgBlack,
  BgGray,
  CCBlack,
  CCGray,
  PlayBlack,
  PlayGray,
};
