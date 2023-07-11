import React, { ReactElement } from 'react';
import { router } from 'routes';
import { RouterProvider } from 'react-router-dom';

const App = (): ReactElement => {
  return (
    <div className="relative bg-gray-100 dark:bg-gray-800">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
