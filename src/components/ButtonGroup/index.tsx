import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';

type ButtonGroupProps = {
  className?: string;
  onclick: (arg: string) => void;
  activeKey: string;
};

const ButtonGroup = ({ className, onclick, activeKey }: ButtonGroupProps): ReactElement => {
  const handleClick = (key: string): void => {
    onclick(key);
  };

  return (
    <div className={classNames('inline-flex rounded-md', className || 'shadow-sm')}>
      <button
        onClick={(): void => handleClick('current-weather')}
        type="button"
        aria-current="page"
        className={classNames(
          'w-40 rounded-l-lg border border-gray-200 bg-white py-4 text-sm font-medium hover:bg-gray-100 focus:z-10 focus:text-violet-700 focus:ring-2 focus:ring-violet-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-violet-500',
          { 'text-violet-700': activeKey === 'current-weather' }
        )}
      >
        Current Weather
      </button>
      <button
        onClick={(): void => handleClick('forecast')}
        type="button"
        className={classNames(
          'w-40 rounded-r-md border border-gray-200 bg-white py-4 text-sm font-medium hover:bg-gray-100 hover:text-violet-700 focus:z-10 focus:text-violet-700 focus:ring-2 focus:ring-violet-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-violet-500',
          { 'text-violet-700': activeKey === 'forecast' }
        )}
      >
        Forecast
      </button>
    </div>
  );
};

export default ButtonGroup;
