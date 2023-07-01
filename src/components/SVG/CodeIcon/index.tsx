import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';

type CodeIconProps = {
  className?: string;
  tabIndex?: number;
};

const CodeIcon = ({ className, tabIndex }: CodeIconProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={classNames('h-6 w-6', className)}
      tabIndex={tabIndex}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );
};

export default CodeIcon;
