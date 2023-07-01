import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';

type ButtonGroupProps = {
  className?: string;
};

const ButtonGroup = ({ className }: ButtonGroupProps): ReactElement => {
  return (
    <div className={classNames('inline-flex rounded-md', className || 'shadow-sm')}>
      <button
        type="button"
        aria-current="page"
        className="w-40 rounded-l-lg border border-gray-200 bg-white py-4 text-sm font-medium text-blue-700 hover:bg-gray-100 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
      >
        Profile
      </button>
      <button
        type="button"
        className="w-40 border-b border-t border-gray-200 bg-white py-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
      >
        Settings
      </button>
      <button
        type="button"
        className="w-40 rounded-r-md border border-gray-200 bg-white py-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
      >
        Messages
      </button>
    </div>
  );
};

export default ButtonGroup;
