import React, { ReactElement } from 'react';
import CodeIcon from 'components/SVG/CodeIcon';
import { WeatherApiData } from 'types';
import classNames from 'utils/classNames';
import Toggle from 'components/Toggle';

type WeatherCardProps = {
  className?: string;
  data: WeatherApiData;
};

const WeatherCard = ({ className, data }: WeatherCardProps): ReactElement => {
  return (
    <div
      className={classNames(
        'bg-secondary block h-[28rem] max-w-4xl rounded-lg border p-6 shadow dark:border-gray-800 dark:bg-gray-900',
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
          <CodeIcon
            tabIndex={1}
            className="cursor-pointer rounded-lg border bg-gray-500 p-1 hover:bg-gray-200 focus:ring-4 focus:ring-blue-300"
          />
        </a>
      </div>
      <section
        className={classNames(
          'bg-primary h-[14rem] w-full rounded-lg px-4 py-2 shadow-lg',
          className
        )}
      >
        <div className="flex items-baseline justify-between">
          <span className="inline-block">Current Weather</span>
          <Toggle labelLeft="C" labelRight="F" />
        </div>
        <div className="flex items-center">
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>
      </section>
    </div>
  );
};

export default WeatherCard;
