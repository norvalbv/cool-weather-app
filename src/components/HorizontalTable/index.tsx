import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';

export interface HorizontalTableProps {
  title: string;
  value: JSX.Element | JSX.Element[] | string | number | null;
  valueSymbol?: string;
  widths?: { title: string; value: string };
  requirePadding?: boolean;
}

const HorizontalTable = ({
  title,
  value,
  valueSymbol,
  widths = { title: 'w-3/5', value: 'w-2/5' },
  requirePadding = true,
}: HorizontalTableProps): ReactElement => {
  return (
    <div className="group flex w-40">
      <div
        className={classNames(
          'text-neutral-N400 select-none leading-[1.145]',
          {
            'py-2': requirePadding,
          },
          widths.title
        )}
      >
        {title}
      </div>
      <div
        className={classNames(
          'text-neutral-N600 text-right leading-[1.145]',
          {
            'py-2': requirePadding,
          },
          widths.value
        )}
      >
        {value}&nbsp;
        {valueSymbol}
      </div>
    </div>
  );
};

export default HorizontalTable;
