import React, { useEffect, useRef, useState } from 'react';
import MainCanvas from './mainCanvas';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Dock } from 'react-dock';
import axios from 'axios';
import _ from 'lodash';
import { debounce } from '../../common/helpers/utlis';
import { updateEditor } from './helpers/editor';
import uuid from 'react-uuid';
import SidePane from './mainCanvas/components/SidePane';
import {
  circleElemenetInitProps,
  imageElementInitProps,
  squareElemenetInitProps,
  textElementInitProps,
  textElementSubHeadingInitProps,
} from './mainCanvas/components/Constants/elements';
import MainTopBar from './MainTopBar';

const PodCastEditor = () => {
  let [zoomIn, setZoomIn] = useState(null);
  let panRef = useRef(null);
  let [disablePan, setDisablePan] = useState(false);
  const [curZoomState, setCurrentZoomState] = useState(1);

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
      console.log(
        '🚀 ~ file: index.js:34 ~ getEditorState ~ currentEditorState',
        currentEditorState
      );
      const newEditorState = {
        ...editorElements,
        ids: [...currentEditorState.ids],
        elementMap: { ...currentEditorState.elementMap },
        key: currentEditorState._id,
        properties: currentEditorState.editorProperties,
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

  const addElementType = async (type, properties = {}) => {
    const id = uuid();
    let elementProps = {
      id: id,
      index: editorElements.ids.length,
    };

    if (type === 'heading') {
      elementProps = {
        ...elementProps,
        ...textElementInitProps,
      };
    }
    if (type === 'subHeading') {
      elementProps = {
        ...elementProps,
        ...textElementSubHeadingInitProps,
      };
    }
    if (type === 'square') {
      elementProps = {
        ...elementProps,
        ...squareElemenetInitProps,
      };
    }
    if (type === 'circle') {
      elementProps = {
        ...elementProps,
        ...circleElemenetInitProps,
      };
    }
    if (type === 'image') {
      elementProps = {
        ...elementProps,
        ...imageElementInitProps,
        src: properties.src,
      };
    }

    const newEditorState = {
      ...editorElements,
      ids: [...editorElements.ids, id],
      elementMap: { ...editorElements.elementMap, ...{ [id]: elementProps } },
    };

    // await axios.put(
    //   `http://localhost:5000/editor-contents/update/${newEditorState.key}`,
    //   {
    //     ids: newEditorState.ids,
    //     elementMap: newEditorState.elementMap,
    //   }
    // );

    console.log(
      newEditorState.ids,
      newEditorState.elementMap,
      newEditorState.key
    );

    setEditorElementState(newEditorState);
  };

  const handleEditorProperty = async (type) => {
    let properties;
    if (type === 'backgroundColor') {
      properties = {
        ...editorElements.properties,
        editorStyle: 'color',
        editorBackgroundColor: 'red',
      };
    }

    const newEditorState = {
      ...editorElements,
      properties,
    };
    console.log(
      '🚀 ~ file: index.js:149 ~ handleEditorProperty ~ newEditorState',
      newEditorState
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

  const addElementToCanvas = async (type, properties = {}) => {
    if (type === 'heading') {
      await addElementType(type);
    }
    if (type === 'subHeading') {
      await addElementType(type);
    }
    if (type === 'square') {
      await addElementType(type);
    }
    if (type === 'circle') {
      await addElementType(type);
    }
    if (type === 'backgroundColor') {
      await handleEditorProperty(type);
    }
    if (type === 'image') {
      await addElementType(type, properties);
    }
  };

  console.log(editorElements);

  return (
    <div style={{ width: '100%', height: '100%', overflow:"hidden"}}>
      <MainTopBar />
      <div style={{ width: '100%', height: '100%' }}>
        <Dock
          size={530}
          position="left"
          isVisible={true}
          fluid={false}
          dimMode={'none'}
        >
          <SidePane addElementToCanvas={addElementToCanvas} />
        </Dock>
        <div style={{ width: '100%', height: '100%',"backgroundColor":"#F5F5F5"}} >
          <MainCanvas
            onDragCallBack={onDragCallBack}
            onClickCallBack={onClickCallBack}
            enablePan={enablePan}
            editorElements={editorElements}
            setEditorElementState={setEditorElementState}
            zoomState={curZoomState}
          />
        </div>
      </div>
    </div>
  );
};

export default PodCastEditor;
