import React, { ReactElement } from 'react';
import CodeIcon from 'components/SVG/CodeIcon';
import { WeatherApiData } from 'types';
import classNames from 'utils/classNames';
import Toggle from 'components/Toggle';
import PartlyCloudyDay from 'components/SVG/Weather/PartlyCloudyDay';
import Sunrise from 'components/SVG/Weather/Sunrise';
import Sunset from 'components/SVG/Weather/Sunset';
import Overcast from 'components/SVG/Weather/Overcast/ index';

type WeatherCardProps = {
  className?: string;
  data: WeatherApiData;
};

const weatherIcons = {
  'broken clouds': <PartlyCloudyDay />,
  'overcast clouds': <Overcast />,
};

const WeatherCard = ({ className, data }: WeatherCardProps): ReactElement => {
  return (
    <div
      className={classNames(
        'bg-secondary block h-[28rem] max-w-4xl rounded-lg p-6 shadow-2xl dark:bg-gray-900',
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
          <span className="inline-block underline underline-offset-4">Current Weather</span>
          <Toggle labelLeft="C" labelRight="F" />
        </div>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex items-center gap-8">
            <div className="h-32 w-32">{weatherIcons[data.current.weather[0].description]}</div>
            <div>
              <h2 className="text-3xl">{data.current.temp}&deg;</h2>
              <span className="mb-4 inline-block capitalize">
                {data.current.weather[0].description}
              </span>
            </div>
          </div>
          <div className="flex flex-1 gap-4">
            <ul className="divide-x-1 capitalize">
              <li>Feels Like&nbsp;{data.current.feels_like}&deg;</li>
              <li>Humidity&nbsp;{data.current.humidity}</li>
              <li>Pressure&nbsp;{data.current.pressure}</li>
              <li>UVI&nbsp;{data.current.uvi}</li>
            </ul>
            <ul className="divide-x-1 capitalize">
              <li>Clouds&nbsp;{data.current.clouds}&deg;</li>
              <li>Wind Deg&nbsp;{data.current.wind_deg}</li>
              <li>Wind Gust&nbsp;{data.current.wind_gust}</li>
              <li>Wind Speed&nbsp;{data.current.wind_speed}</li>
            </ul>
          </div>
          <div>
            <Sunrise className="w-20" />
            <span className="inline-block">sunrise</span>
          </div>
          <div>
            <Sunset className="w-20" />
            <span className="inline-block">sunset</span>
          </div>
        </div>
      </section>
      <section className="bg-primary mt-4 h-[7rem] w-full rounded-lg px-4 py-2 shadow-lg"></section>
    </div>
  );
};

export default WeatherCard;
