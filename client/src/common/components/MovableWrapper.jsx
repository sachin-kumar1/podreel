import React from 'react';
import Moveable from 'react-moveable';
const MovableWrapper = ({
  activeElement,
  targetRef,
  movableRef,
  customOnResizeFunction,
  onDragCallBack,
  zoomState,
}) => {
  React.useEffect(() => {
    // console.log("current target ref values are", targetRef.current.style);
    // if (targetRef.current) {
    //   targetRef.current.style =
    //     "height: 396.288px; width: 396.288px; overflow: hidden; transform: translate(-70px, 98px);";
    // }
    window.addEventListener('resize', onWindowReisze);
  }, [targetRef]);

  React.useEffect(()=>{
    console.log("ZOOM HANDLE")
    onWindowReisze();
  },[zoomState])

  const onWindowReisze = () => {
    console.log('RESIZE');
    if (movableRef.current) {
        console.log("ZOOM HANDLE UPDATE RECT")
      movableRef.current.updateRect();
    }
  };
  console.log('908', activeElement);

  const shouldKeepRatio = () => {
    return activeElement.type === 'wave' || activeElement.type === "shapes"
  }
  return (
    <Moveable
      target={targetRef}
      container={null}
      origin={true}
      ref={movableRef}
      /* Resize event edges */
      edge={false}
      /* draggable */
      draggable={true}
      throttleDrag={0}
      onDragStart={({ target, clientX, clientY }) => {
        console.log('onDragStart', target);
      }}
      onDrag={({
        target,
        beforeDelta,
        beforeDist,
        left,
        top,
        right,
        bottom,
        delta,
        dist,
        transform,
        clientX,
        clientY,
      }) => {
        console.log('onDrag left, top', left, top);
        // target!.style.left = `${left}px`;
        // target!.style.top = `${top}px`;
        console.log('onDrag translate', dist);
        if (target) target.style.transform = transform;
        if (onDragCallBack)
          onDragCallBack({
            target,
            beforeDelta,
            beforeDist,
            left,
            top,
            right,
            bottom,
            delta,
            dist,
            transform,
            clientX,
            clientY,
          });
      }}
      onDragEnd={({ target, isDrag, clientX, clientY }) => {
        console.log('onDragEnd', parseInt(target.style.height, 10), isDrag);
      }}
      /* When resize or scale, keeps a ratio of the width, height. */
      keepRatio={shouldKeepRatio()}
      /* resizable*/
      /* Only one of resizable, scalable, warpable can be used. */
      resizable={true}
      throttleResize={0}
      onResizeStart={({ target, clientX, clientY }) => {
        console.log('onResizeStart', target);
      }}
      onResize={({
        target,
        width,
        height,
        dist,
        delta,
        direction,
        clientX,
        clientY,
      }) => {
        console.log('onResize', target);
        if (target) {
          delta[0] && (target.style.width = `${width}px`);
          delta[1] && (target.style.height = `${height}px`);
          customOnResizeFunction(target);
        }
      }}
      onResizeEnd={({ target, isDrag, clientX, clientY }) => {
        console.log('onResizeEnd', target, isDrag);
      }}
      /* scalable */
      /* Only one of resizable, scalable, warpable can be used. */
      scalable={true}
      throttleScale={0}
      onScaleStart={({ target, clientX, clientY }) => {
        console.log('onScaleStart', target);
      }}
      onScale={({
        target,
        scale,
        dist,
        delta,
        transform,
        clientX,
        clientY,
      }) => {
        console.log('onScale scale', scale);
        if (target) target.style.transform = transform;
      }}
      onScaleEnd={({ target, isDrag, clientX, clientY }) => {
        console.log('onScaleEnd', target, isDrag);
      }}
      /* rotatable */
      rotatable={true}
      throttleRotate={0}
      onRotateStart={({ target, clientX, clientY }) => {
        console.log('onRotateStart', target);
      }}
      onRotate={({ target, delta, dist, transform, clientX, clientY }) => {
        console.log('onRotate', dist);
        if (target) target.style.transform = transform;
      }}
      onRotateEnd={({ target, isDrag, clientX, clientY }) => {
        console.log('onRotateEnd', target, isDrag);
      }}
      // Enabling pinchable lets you use events that
      // can be used in draggable, resizable, scalable, and rotateable.
      pinchable={true}
      onPinchStart={({ target, clientX, clientY, datas }) => {
        // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
        console.log('onPinchStart');
      }}
      onPinch={({ target, clientX, clientY, datas }) => {
        // pinch event occur before drag, rotate, scale, resize
        console.log('onPinch');
      }}
      onPinchEnd={({ isDrag, target, clientX, clientY, datas }) => {
        // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
        console.log('onPinchEnd');
      }}
    />
  );
};

export default MovableWrapper;
