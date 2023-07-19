import React, { ReactElement } from 'react';

export type ToggleProps = {
  labelLeft?: string;
  labelRight?: string;
  onclick?: () => void;
  isChecked: boolean;
};

const Toggle = ({ labelLeft, labelRight, onclick, isChecked }: ToggleProps): ReactElement => {
  const handleToggle = (): void => {
    if (onclick) onclick();
  };
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="mb-5 flex items-center gap-2">
      {labelLeft && (
        <span className={!isChecked ? 'text-violet-700 underline' : ''}>{labelLeft}</span>
      )}
      <div className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div
          onClick={handleToggle}
          className="bg-secondary peer h-5 w-9 rounded-full after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
        />
      </div>
      {labelRight && (
        <span className={isChecked ? 'text-violet-700 underline' : ''}>{labelRight}</span>
      )}
    </label>
  );
};

export default Toggle;
