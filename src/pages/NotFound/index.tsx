import React, { ReactElement } from 'react';

const NotFound = (): ReactElement => {
  return (
    <div className="grid h-screen w-screen place-items-center text-center">
      <div className="max-w-md">
        <span className="block text-3xl">Page Not Found 😢</span>
        <div className="mt-6 h-[1px] bg-gray-500" />
        <div className="mb-6 mt-10" />
        <button onClick={(): void => window.history.back()} type="button">
          Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
