import React, { ReactElement, useState } from 'react';

type ToggleProps = {
  labelLeft?: string;
  labelRight?: string;
};

const Toggle = ({ labelLeft, labelRight }: ToggleProps): ReactElement => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <>
      <label className="mb-5 flex items-center gap-2">
        {labelLeft && <span className={!isChecked ? 'text-secondary' : ''}>{labelLeft}</span>}
        <div
          className="relative inline-flex cursor-pointer items-center"
          onClick={(): void => setIsChecked(!isChecked)}
        >
          <input type="checkbox" className="peer sr-only" />
          <div className="bg-secondary peer h-5 w-9 rounded-full after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
        </div>
        {labelRight && <span className={isChecked ? 'text-secondary' : ''}>{labelRight}</span>}
      </label>
    </>
  );
};

export default Toggle;
