import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';

type WeatherCardProps = {
  className?: string;
};

const WeatherCard = ({ className }: WeatherCardProps): ReactElement => {
  return (
    <section
      className={classNames(
        'block h-[28rem] max-w-4xl rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-800 dark:bg-gray-900',
        className
      )}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
        chronological order.
      </p>
    </section>
  );
};

export default WeatherCard;
