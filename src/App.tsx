import React, { ReactElement } from 'react';
import { router } from 'routes';
import { RouterProvider } from 'react-router-dom';
import useTheme from 'hooks/useTheme';
import classNames from 'utils/classNames';
import { SWRConfig } from 'swr';

const App = (): ReactElement => {
  const { isDarkMode } = useTheme();
  return (
    <div className={classNames('relative', isDarkMode ? 'dark' : 'light')}>
      {/* Create and distribute cache instance across App. */}
      <SWRConfig value={{ provider: () => new Map() }}>
        <RouterProvider router={router} />
      </SWRConfig>
    </div>
  );
};

export default App;
