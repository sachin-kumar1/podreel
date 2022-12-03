import React, { useEffect, useRef, useState } from 'react';
import MainCanvas from './mainCanvas';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const PodCastEditor = () => {
  let [zoomIn, setZoomIn] = useState(null);
  let panRef = useRef(null);
  let [disablePan, setDisablePan] = useState(false);

  useEffect(() => {
    if (panRef.current) {
      // panRef.current.zoomIn();
      // panRef.current.zoomOut();

      console.log('Panref');
      // panRef();
    }
    // panRef();
  }, [panRef.current]);

  const onDragCallBack = (e) => {
    console.log('Drag is called', e);
    setDisablePan(true);
  };

  const onClickCallBack = () => {
    setDisablePan(true);
  };

  const enablePan = () => {
    setDisablePan(false);
  };

  return (
    <div>
      {/* <input
        type="range"
        defaultValue={0}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      /> */}

      <TransformWrapper
        ref={panRef}
        initialScale={1}
        // initialPositionX={200}
        // initialPositionY={100}
        panning={{
          disabled: disablePan,
        }}
        // disabled={disablePan}
        doubleClick={{
          disabled: true,
        }}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => {
          setZoomIn(() => {
            // zoomIn();
          });
          return (
            <div
              style={{
                backgroundColor: 'olive',
              }}
            >
              {/* <div className="tools">
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => resetTransform()}>x</button>
              </div> */}
              <div
                style={{
                  backgroundColor: 'pink',
                }}
              >
                <TransformComponent>
                  <MainCanvas
                    onDragCallBack={onDragCallBack}
                    onClickCallBack={onClickCallBack}
                    enablePan={enablePan}
                  />
                </TransformComponent>
              </div>
            </div>
          );
        }}
      </TransformWrapper>
    </div>
  );
};

export default PodCastEditor;
