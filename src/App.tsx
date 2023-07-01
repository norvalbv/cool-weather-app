import React, { ReactElement } from 'react';
import Landing from 'pages/Landing';

const App = (): ReactElement => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 to-fuchsia-500">
      <Landing />;
    </div>
  );
};

export default App;
