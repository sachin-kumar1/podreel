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
    </div>
  );
};

export default Paragraph;
