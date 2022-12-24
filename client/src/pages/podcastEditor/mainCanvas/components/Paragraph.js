import React from 'react';

const Paragraph = () => {
  return (
    <div>
      <p>
        Paragraph Rename componentWillUpdate to UNSAFE_componentWillUpdate to
        suppress this warning in non-strict mode. In React 18.x, only the
        UNSAFE_ name will work. To rename all deprecated lifecycles to their new
        names, you can run `npx react-codemod rename-unsafe-lifecycles` in your
        project source folder.
      </p>
      {/* <video width="750" height="500" autoPlay muted>
        <source src="https://upload.wikimedia.org/wikipedia/commons/transcoded/1/17/NORWAY_TRIP_%284K%29.webm/NORWAY_TRIP_%284K%29.webm.720p.vp9.webm" type="video/mp4" />
      </video> */}
    </div>
  );
};

export default Paragraph;
