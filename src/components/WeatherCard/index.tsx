import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';

type WeatherCardProps = {
  className?: string;
  data: object;
};

const WeatherCard = ({ className, data }: WeatherCardProps): ReactElement => {
  return (
    <section
      className={classNames(
        'block h-[28rem] max-w-4xl rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-800 dark:bg-gray-900',
        className
      )}
    >
      <div className="bg-red-500">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Weather Today in
        </h2>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
        chronological order.
      </p>
    </section>
  );
};

export default WeatherCard;
