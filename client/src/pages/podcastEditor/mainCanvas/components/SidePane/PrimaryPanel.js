import React from 'react';
import { pannelContents } from './constants';
import BackGroundSVG from './SVG/BackGroundSVG';
import ElementsSVG from './SVG/ElementsSVG';
import PhotoSVG from './SVG/PhotoSVG';
import TemplateSVG from './SVG/TemplateSVG';
import TextSVG from './SVG/TextSVG';
import TranscriptSVG from './SVG/TranscriptSVG';

const PannelItem = ({
  name,
  marginTop,
  desc,
  updateSelectedPane,
  isSlectedPane,
}) => {
  const getSVGComponent = (name) => {
    console.log('CALLED HERE 1 NAME', name, name === 'Elements');

    switch (name) {
      case 'Templates':
        return TemplateSVG;
      case 'Elements':
        return ElementsSVG;
      case 'Text':
        return TextSVG;
      case 'Photos':
        return PhotoSVG;
      case 'Transcript':
        return TranscriptSVG;
      case 'Background':
        return BackGroundSVG;
      default:
        return TemplateSVG;
    }
  };
  const SVGToRender = getSVGComponent(name);

  return (
    <div
      onClick={() => {
        updateSelectedPane(name);
      }}
      style={{
        borderRight: isSlectedPane ? '4px solid #D9D9D9' : '0px',
        marginTop,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <SVGToRender />
      <p style={{ color: 'white' }}>{desc}</p>
    </div>
  );
};

const PrimaryPanel = ({ selectedPane, updateSelectedPane }) => {
  return (
    <div
      style={{
        width: '110px',
        height: '100%',
        backgroundColor: '#18191B',
        borderRight: '2px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {pannelContents.map((val, index) => {
          console.log('name is', val.SVG, val);
          const isSlectedPane = val.SVG === selectedPane;
          return (
            <PannelItem
              name={val.SVG}
              desc={val.desc}
              marginTop={val.marginTop}
              id={index}
              updateSelectedPane={updateSelectedPane}
              isSlectedPane={isSlectedPane}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PrimaryPanel;
