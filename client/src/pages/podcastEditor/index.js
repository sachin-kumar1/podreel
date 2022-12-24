import React, { useEffect, useRef, useState } from 'react';
import MainCanvas from './mainCanvas';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Dock } from 'react-dock';
import axios from 'axios';
import _ from 'lodash';
import { debounce } from '../../common/helpers/utlis';
import { updateEditor } from './helpers/editor';
import uuid from 'react-uuid';

const PodCastEditor = () => {
  let [zoomIn, setZoomIn] = useState(null);
  let panRef = useRef(null);
  let [disablePan, setDisablePan] = useState(false);

  const [editorLoaded, setEditorLoaded] = useState(false);

  const [editorElements, setEditorElementState] = React.useState({
    ids: [],
    elementMap: {},
    activeElement: {
      id: undefined,
      ref: undefined,
    },
  });

  const getEditorState = async () => {
    let res = await axios.get('http://localhost:5000/editor-contents');
    if (res.data) {
      const currentEditorState = res.data.editorState[0];
      const newEditorState = {
        ...editorElements,
        ids: [...currentEditorState.ids],
        elementMap: { ...currentEditorState.elementMap },
        key: currentEditorState._id,
      };
      setEditorElementState(newEditorState);
      setEditorLoaded(true);
    }
  };

  useEffect(() => {
    getEditorState();
  }, []);

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

  const addTextElement = async () => {
    const id = 'text2';
    const textBody = {
      id: id,
      width: 250,
      height: 170,
      background: 'blue',
      x: 70,
      y: 50,
      rotate: 0,
      type: 'text',
      index: editorElements.ids.length,
    };

    const newEditorState = {
      ...editorElements,
      ids: [...editorElements.ids, id],
      elementMap: { ...editorElements.elementMap, ...{ [id]: textBody } },
    };

    await axios.put(
      `http://localhost:5000/editor-contents/update/${newEditorState.key}`,
      {
        ids: newEditorState.ids,
        elementMap: newEditorState.elementMap,
      }
    );

    console.log(
      newEditorState.ids,
      newEditorState.elementMap,
      newEditorState.key
    );

    setEditorElementState(newEditorState);
  };

  const addImageElement = async () => {
    const id = uuid();
    const textBody = {
      id: id,
      width: 250,
      height: 170,
      background: 'transparent',
      x: 70,
      y: 50,
      rotate: 0,
      type: 'image',
      index: editorElements.ids.length,
    };

    const newEditorState = {
      ...editorElements,
      ids: [...editorElements.ids, id],
      elementMap: { ...editorElements.elementMap, ...{ [id]: textBody } },
    };

    await axios.put(
      `http://localhost:5000/editor-contents/update/${newEditorState.key}`,
      {
        ids: newEditorState.ids,
        elementMap: newEditorState.elementMap,
      }
    );

    console.log(
      newEditorState.ids,
      newEditorState.elementMap,
      newEditorState.key
    );

    setEditorElementState(newEditorState);
  };

  if (!editorLoaded) {
    return <h1>Loading Editor</h1>;
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Dock
        size={400}
        position="left"
        isVisible={false}
        fluid={false}
        dimMode={'none'}
      >
        <div>X</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            onClick={async () => {
              console.log('ADD A TEXT ELEMENT');
              await addTextElement();
            }}
          >
            ADD TEXT FIELD
          </button>
          <button
            onClick={async () => {
              console.log('ADD A TEXT ELEMENT');
              await addImageElement();
            }}
          >
            ADD IMAGE FIELD
          </button>
          <button
            onClick={() => {
              console.log(editorElements);
            }}
          >
            LOG STATE
          </button>
        </div>
      </Dock>
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
                width: '100%',
                height: '100%',
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
                  width: '100%',
                  height: '100%',
                }}
              >
                <TransformComponent
                  wrapperStyle={{ width: '100%', height: '100%' }}
                  contentStyle={{ width: '100%', height: '100%' }}
                >
                  <MainCanvas
                    onDragCallBack={onDragCallBack}
                    onClickCallBack={onClickCallBack}
                    enablePan={enablePan}
                    editorElements={editorElements}
                    setEditorElementState={setEditorElementState}
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
