import React from 'react';
import SVG from 'react-inlinesvg';


const elementSVG = '<svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="url(#affg)" d="M0 0h40v50H0z"/><defs><pattern id="affg" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#bvvb" transform="matrix(.01042 0 0 .00833 0 .1)"/></pattern><image id="bvvb" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA9ElEQVR4nO3bQQ6CMABFQfRUeP+F3EqPgA3Vl8aZNeSTvLAhdNsAAAAA+Be30Ruex/Eauf6x78MbV/bq/dG9+9jjMJsAMQFiAsQEiAkQEyAmQEyAmAAxAWKXvpN8YrVvObP3z3gDYgLEBIgJEBMgJkBMgJgAMQFiAsQEiAkQEyAmQEyAmH9DJ+/7N3QxAsQEiAkQEyAmQEyAmAAxAWICxASICRATICZATICY8wFf3j/jDYgJEBMgJkBMgJgAMQFiAsQEiAkQEyAmQEyAmAAxAWLOB0zedz5gMQLEBIgJEBMgJkBMgJgAMQFiAsQEAAAAAIAfeQN6fDSMamjaOgAAAABJRU5ErkJggg=="/></defs></svg>'

const BackGroundSVG = () => {
    return <SVG src={elementSVG} />;
};

export default BackGroundSVG;