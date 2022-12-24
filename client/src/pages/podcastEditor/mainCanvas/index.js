import React, { useEffect, useRef, useState } from 'react';
import Element from './components/Element';
import MovableWrapper from '../../../common/components/MovableWrapper';
import { debounce } from '../../../common/helpers/utlis';
import { updateEditor } from '../helpers/editor';
import { parseComplexStyleProperty } from '../helpers/utils';

const MainCanvas = ({
  onDragCallBack,
  onClickCallBack,
  enablePan,
  editorElements,
  setEditorElementState,
}) => {
  const myRef = useRef();
  const [activeElement, setActiveElement] = useState({});
  const [activeElementProperties, setActiveElementProperties] = useState(null);
  
  // { activeElement, ids, elementMap }

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
    myRef.current.style.transform = 'translate(-50%, -50%) scale(2)';
    // myRef.current.style.transform = 'translate(-50%, -50%)';
  }, []);

  const handleElementReSize = async (id, values) => {
    console.log("Element resize")
    const newEditorState = {
      ...editorElements,
      elementMap: {
        ...editorElements.elementMap,
        [id]: {
          ...editorElements.elementMap[id],
          ...values,
        },
      },
    };
    console.log(
      '🚀 ~ file: index.js:59 ~ handleElementReSize ~ newEditorState',
      newEditorState
    );
    await updateEditor(newEditorState);
    setEditorElementState(newEditorState);
  };

  const debounceElementReSizeHandler = React.useCallback(
    debounce(handleElementReSize,500),
    []
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
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
          activeElement={editorElements.activeElement}
          targetRef={editorElements.activeElement.ref}
          movableRef={movableRef}
          customOnResizeFunction={(target) => {
            const newActiveElementProps = {
              height: target.offsetHeight,
              width: target.offsetWidth,
              id: activeElement.id,
            };
            setActiveElementProperties(newActiveElementProps);
            debounceElementReSizeHandler(activeElement.id, {
              height: target.offsetHeight,
              width: target.offsetWidth,
            });
          }}
          onDragCallBack={(e)=>{
            const parsedTransFormValue = parseComplexStyleProperty(e.target.style.transform)
            const newTransLateValue = parsedTransFormValue && parsedTransFormValue.translate && parsedTransFormValue.translate[0].split(',')
            if(newTransLateValue){
              const newXValue = parseFloat(newTransLateValue[0].trim());
              const newYValue = parseFloat(newTransLateValue[1].trim());
              debounceElementReSizeHandler(activeElement.id, {
                x: newXValue,
                y: newYValue,
              });
            }
            onDragCallBack(e)
          }}
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
