import React, { useEffect, useRef, useState } from 'react';
import Element from './components/Element';
import MovableWrapper from '../../../common/components/MovableWrapper';

const MainCanvas = ({ onDragCallBack, onClickCallBack, enablePan }) => {
  const myRef = useRef();
  const [activeElement,setActiveElement] = useState({}); 
  const [activeElementProperties,setActiveElementProperties] = useState(null);
  
  // { activeElement, ids, elementMap }
  const [editorElements, setEditorElementState] = React.useState({
    ids: ['text', 'wave', 'subtitle'],
    elementMap: {
      text: {
        id: 'text',
        width: 295,
        height: 211,
        background: 'tomato',
        x: 17,
        y: 5,
        rotate: 0,
      },
      subtitle: {
        id: 'subtitle',
        width: 382,
        height: 280,
        background: 'blue',
        x: 110,
        y: 280,
        rotate: 0,
      },
      wave: {
        id: 'wave',
        width: 250,
        height: 150,
        background: 'papayawhip',
        x: 340,
        y: 13,
        rotate: 2.20779,
      },
    },
    activeElement: {
      id: undefined,
      ref: undefined,
    },
  });

  const handleChange = ({ id, ...values }) => {
    setEditorElementState((prev) => ({
      ...prev,
      elementMap: {
        ...prev.elementMap,
        [id]: {
          ...prev.elementMap[id],
          ...values,
        },
      },
    }));
  };

  const handleSelect = (activeElement) => {
    console.log('SELECT ACTIVE ELEMNT', activeElement);
    setActiveElement(activeElement);
    setEditorElementState((prev) => ({ ...prev, activeElement }));
  };

  const targetRef = React.useRef(null);
  const movableRef = React.useRef(null);

  // const onDragCallBack = () => {};
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      console.log('OUTSIDE CLICK');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  useEffect(() => {
    // myRef.current.style.transform = 'translate(-50%, -50%) scale(2)';
    myRef.current.style.transform = 'translate(-50%, -50%)';
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* rendering all the Editor elements */}
      <div
        style={{
          top: '50%',
          left: '50%',
          width: '960px',
          height: '540px',
          border: '1px',
          position: 'fixed',
          backgroundColor: 'grey',
          overflow: 'hidden',
        }}
        ref={myRef}
        onClick={(e) => {
          e.preventDefault();
          console.log('OUT DIV CLICK');
          handleSelect({
            id: undefined,
            ref: undefined,
          });
          enablePan();
        }}
      >
        <MovableWrapper
          targetRef={editorElements.activeElement.ref}
          movableRef={movableRef}
          customOnResizeFunction={(target) => {
            console.log("custom",target,target.offsetWidth);
            const newActiveElementProps = {
              height : target.offsetHeight,
              width: target.offsetWidth,
              id: activeElement.id,
            }
            setActiveElementProperties(newActiveElementProps);
          }}
          onDragCallBack={onDragCallBack}
        />
        {editorElements.ids.map((id) => {
          return (
            <Element
              element={editorElements.elementMap[id]}
              onChange={handleChange}
              onSelect={handleSelect}
              key={id}
              onClickCallBack={onClickCallBack}
              activeElementProperties={activeElementProperties}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainCanvas;
