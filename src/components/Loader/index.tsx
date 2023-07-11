import React, { ReactElement } from 'react';
import LoaderIcon from 'components/SVG/LoaderIcon';
import useTheme from 'hooks/useTheme';

const Loader = (): ReactElement => {
  const { isDarkMode } = useTheme();
  return (
    <div className="grid h-screen w-full place-items-center">
      <LoaderIcon stroke={isDarkMode ? '#fff' : '#d4d4d4'} />
    </div>
  );
};

export default Loader;
