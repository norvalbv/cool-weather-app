import React, { ReactElement } from 'react';
import { router } from 'routes';
import { RouterProvider } from 'react-router-dom';

const App = (): ReactElement => {
  return (
    <div className="relative min-h-screen bg-gray-100 shadow dark:bg-gray-800">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
