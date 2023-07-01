import React, { ReactElement } from 'react';
import CodeIcon from 'components/SVG/CodeIcon';
import { WeatherApiData } from 'types';
import classNames from 'utils/classNames';

type WeatherCardProps = {
  className?: string;
  data: WeatherApiData;
};

const WeatherCard = ({ className, data }: WeatherCardProps): ReactElement => {
  return (
    <div
      className={classNames(
        'bg-primary block h-[28rem] max-w-4xl rounded-lg border p-6 shadow dark:border-gray-800 dark:bg-gray-900',
        className
      )}
    >
      <div className="items-top flex justify-between">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-200">
          Weather Today in {`${data.lat} ${data.lon}`}
        </h2>
        <a
          href="https://github.com/norvalbv/cool-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodeIcon className="cursor-pointer rounded-lg border bg-gray-200 p-1 hover:bg-gray-600" />
        </a>
      </div>
      <section
        className={classNames(
          'bg-secondary block h-[14rem] w-full rounded-lg  p-6 shadow-lg',
          className
        )}
      ></section>
    </div>
  );
};

export default WeatherCard;
