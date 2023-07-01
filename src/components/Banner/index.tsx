import React from 'react';

const Banner = () => {
  return (
    <div
      id="sticky-banner"
      tabIndex={-1}
      className="fixed left-0 top-0 z-50 flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700"
    >
      <div className="mx-auto flex items-center">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          <span className="mr-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
            </svg>
            <span className="sr-only">Light bulb</span>
          </span>
          <span>
            New brand identity has been launched for the
            <a
              href="https://flowbite.com"
              className="decoration-600 dark:decoration-500 inline font-medium text-blue-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-blue-500"
            >
              Flowbite Library
            </a>
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <button
          data-dismiss-target="#sticky-banner"
          type="button"
          className="inline-flex flex-shrink-0 items-center justify-center rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;