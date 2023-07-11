import React, { ReactElement, useState, useContext } from 'react';
import { router } from 'routes';
import { RouterProvider } from 'react-router-dom';
import useTheme from 'hooks/useTheme';
import classNames from 'utils/classNames';

const App = (): ReactElement => {
  const { isDarkMode } = useTheme();
  return (
    <div className={classNames('relative', isDarkMode ? 'dark' : 'light')}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
