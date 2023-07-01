import React, { ReactElement } from 'react';
import CodeIcon from 'components/SVG/CodeIcon';
import { WeatherApiData } from 'types';
import classNames from 'utils/classNames';
import Toggle from 'components/Toggle';
import PartlyCloudyDay from 'components/SVG/Weather/PartlyCloudyDay';
import Sunrise from 'components/SVG/Weather/Sunrise';
import Sunset from 'components/SVG/Weather/Sunset';
import HorizontalTable from 'components/HorizontalTable';
import OvercastDay from 'components/SVG/Weather/OvercastDay/ index';
import LightRainDay from 'components/SVG/Weather/LightRainDay';
import useConvertToTime from 'hooks/useConvertToTime';

type WeatherCardProps = {
  className?: string;
  data: WeatherApiData;
};

const weatherIcons = {
  'broken clouds': <PartlyCloudyDay />,
  'overcast clouds': <OvercastDay />,
  'light rain': <LightRainDay />,
};

const WeatherCard = ({ className, data }: WeatherCardProps): ReactElement => {
  const sunrise = useConvertToTime({ epoch: data.current.sunrise, offset: data.timezone_offset });
  const sunset = useConvertToTime({ epoch: data.current.sunset, offset: data.timezone_offset });

  return (
    <div
      className={classNames(
        'bg-secondary h-[28rem] max-w-4xl rounded-lg p-6 shadow-2xl dark:bg-gray-900',
        className
      )}
    >
      <div className="flex items-center justify-between">
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
          <div className="flex flex-1 gap-16">
            <ul className="divide-y divide-violet-700 capitalize">
              <li>
                <HorizontalTable
                  title="Feels Like"
                  value={data.current.feels_like}
                  valueSymbol="°"
                />
              </li>
              <li>
                <HorizontalTable title="Humidity" value={data.current.humidity} valueSymbol="%" />
              </li>
              <li>
                <HorizontalTable title="Pressue" value={data.current.pressure} />
              </li>
              <li>
                <HorizontalTable title="UVI" value={data.current.uvi} />
              </li>
            </ul>
            <ul className="divide-y divide-violet-700 capitalize">
              <li>
                <HorizontalTable title="Cloud" value={data.current.clouds} />
              </li>
              <li>
                <HorizontalTable title="Wind" value={data.current.wind_deg} />
              </li>
              <li>
                <HorizontalTable title="Wind Gust" value={data.current.wind_gust} />
              </li>
              <li>
                <HorizontalTable title="Wind Speed" value={data.current.wind_speed} />
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="flex flex-col items-center ">
              <Sunrise className="w-14" />
              <div className="flex gap-2">
                <span>sunrise</span>
                <span>{sunrise}</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Sunset className="w-14" />
              <div className="flex gap-2">
                <span>sunset</span>
                <span>{sunset}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary mt-4 h-[7rem] w-full rounded-lg px-4 py-2 shadow-lg"></section>
    </div>
  );
};

export default WeatherCard;
