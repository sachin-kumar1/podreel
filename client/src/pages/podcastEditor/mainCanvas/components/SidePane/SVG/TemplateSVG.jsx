import React from 'react';
import SVG from 'react-inlinesvg';

const TemplateSVG = () => {
  const templateSVG =
    '<svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="url(#a)" d="M0 0h40v50H0z"/><defs><pattern id="a" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#b" transform="matrix(.01 0 0 .008 0 .1)"/></pattern><image id="b" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADIElEQVR4nO3dsU4UURTG8e/MSqIWFsbCaGIIJdpJdu7ugq2NtS/gS0BCQDSBykfwBXwDO+MuzCyhFEuMmk00MRYWUpC5x8IloWHJvTvDnGW+Xwv3zIZ/ZmaXTPYCREREREREREREs0HKGpRl2byILAO4q6qtsuZaJiIFgB9FUfR7vd7XUmZOO2B3f/9J4v02gF4Jr2eWDQRYc84NphkSHURVJc/zTYhsTDPnilEFXnbS9LWIaMyAJPbI4xibYIyzRICt4XC4Hj0gZtH4MvUhdn0DKFRXOp3ObujCqDNkfM9gjPOJiuxELQxdkGXZPES+xBysaRKRhTRNg/5WwWeIiKyErmkq7303dM210AWqeg8y8cQ6BvA5dO6MWgRw49yfJsn90IHBQSa+AAAKHHWdW4qYO3P28vyTAA/P/QXvb4bOjH7bS9VgEGMYxBgGMYZBjGEQYxjEmJjPIRMJsJDl+UHZc41aKHtg6UHw/4Pj4wrmNgIvWcYwiDEMYgyDGMMgxjCIMVW87f0FkbcVzLVH9QWAO2WOLD2IAj+7abpa9lyL9vL8mZQchJcsYxjEmCruIRfaGw6fArhVx7ED/Omm6fvLPmgtQaD6ZuLDAQYocAjg0oPwkmUMgxjDIMYwiDEMYgyDGMMgxtTyOaTr3KM6jjsLeIYYwyDGMIgxtdxD8jx/p1M8ZCbAkXPued3HqEItQTywOM0/Fz1w3cIxqsBLljEMYgyDGMMgxjCIMQxiDIMYwyDGMIgxDGIMgxjDIMYwiDEMYgyDGMMgxjCIMQxiDIMYc2UflJvVh/F4hhjDIMYwiDEx95DjST/kN8qdkSR/QwcGBxGR0QVbx/Ab5U55PwpdEnzJKoqiDyBqO5+G0Var9TF0UXCQ8W5kwTvHNI0A/Xa7/T10XdRNXYA18CyZxBciUV/AExXEOTeAyFbM2kZQ3eilaRazNPptr2u3XwmwAZ4pZ3morjvntmMHTL2xV5ZlPRXZEaDJWyGpAP1CZDX2zDhV2k5rg4ODB62Tk5XxNj+3y5pr3G94Pyrm5vrLS0vf6n4xREREREREREREl+kfWaixq30P81UAAAAASUVORK5CYII="/></defs></svg>';

  return <SVG src={templateSVG} />;
};

export default TemplateSVG;
