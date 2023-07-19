import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';

export type TabsKey = 'current-weather' | 'forecast';

type ButtonProps = {
  active: boolean;
  disabled?: boolean;
  id: TabsKey;
  onClick: (arg: TabsKey) => void;
  title: string | JSX.Element;
};

type TabsProps = {
  className?: string;
  data: ButtonProps[];
};

const Tabs = ({ className, data }: TabsProps): ReactElement => {
  return (
    <div
      className={classNames('relative flex items-center justify-center', className || 'shadow-sm')}
    >
      {data.map((tab) => (
        <button
          onClick={(): void => tab.onClick(tab.id)}
          type="button"
          key={tab.id}
          aria-current="page"
          className={classNames(
            'w-40 border border-gray-200 bg-white py-4 text-sm font-medium first:rounded-l-xl first:border-l last:rounded-r-xl hover:bg-gray-100 focus:z-10 focus:text-violet-700 focus:ring-2 focus:ring-violet-700 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-violet-500',
            tab.active ? 'text-violet-700' : 'dark:text-white'
          )}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
