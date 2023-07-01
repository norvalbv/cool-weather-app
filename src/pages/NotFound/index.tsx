import React, { ReactElement } from 'react';

const NotFound = (): ReactElement => {
  return (
    <div className="grid h-screen w-screen place-items-center text-center">
      <div className="max-w-md">
        <span className="block text-3xl">Page Not Found 😢</span>
        <div className="daisy-divider mb-6 mt-10" />
        <button
          className="daisy-btn-ghost daisy-btn"
          onClick={(): void => window.history.back()}
          type="button"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
