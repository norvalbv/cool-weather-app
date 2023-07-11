import React, { ReactElement, useState } from 'react';
import { router } from 'routes';
import { RouterProvider } from 'react-router-dom';

const App = (): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="relative">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
