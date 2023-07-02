import React, { ReactElement } from 'react';
import LoaderIcon from 'components/SVG/LoaderIcon';

const Loader = (): ReactElement => {
  return (
    <div className="grid h-screen w-full place-items-center">
      <LoaderIcon />
    </div>
  );
};

export default Loader;
