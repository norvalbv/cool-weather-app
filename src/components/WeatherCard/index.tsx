import React, { ReactElement, useState } from 'react';
import CodeIcon from 'components/SVG/CodeIcon';
import { WeatherApiData } from 'types';
import classNames from 'utils/classNames';
import Toggle from 'components/Toggle';
import Sunrise from 'components/SVG/Weather/Sunrise';
import Sunset from 'components/SVG/Weather/Sunset';
import HorizontalTable from 'components/HorizontalTable';
import { weatherIcons } from 'components/constants/weatherIcons';
import HourlyWeather from './HourlyWeather';
import convertEpochToTime from 'utils/convertToTime';
import fahrenheitToCelsius from 'utils/FahrenheitToCelcuis';

type WeatherCardProps = {
  className?: string;
  data: WeatherApiData;
};

const WeatherCard = ({ className, data }: WeatherCardProps): ReactElement => {
  const [isCelsius, setIsCelsius] = useState(false);
  return (
    <div
      className={classNames(
        'bg-secondary max-w-4xl rounded-lg p-6 shadow-2xl dark:bg-gray-900',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-200">
          Weather Today in {`${data.lat} ${data.lon}`}
        </h2>
        <div className="group flex items-center justify-center gap-2">
          <p className="text-sm text-white opacity-0 group-hover:opacity-100">View Code</p>
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
      </div>
      <section
        className={classNames('bg-primary w-full rounded-lg px-4 py-2 shadow-lg', className)}
      >
        <div className="flex items-baseline justify-between p-2">
          <div className="divide-y divide-violet-700">
            <span className="block">
              Current Time:&nbsp;
              {convertEpochToTime({ epoch: data.current.dt, offset: data.timezone_offset })}
            </span>
            <span className="block">Current Weather:</span>
          </div>
          <Toggle
            labelLeft="C"
            labelRight="F"
            onclick={(): void => setIsCelsius(!isCelsius)}
            isChecked={isCelsius}
          />
        </div>
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="flex items-center gap-8 md:w-96">
            <div className="h-32 w-32">{weatherIcons[data.current.weather[0].description]}</div>
            <div>
              <h2 className="text-3xl">
                {isCelsius ? fahrenheitToCelsius(data.current.temp) : data.current.temp}&deg;
              </h2>
              <span className="mb-4 inline-block capitalize">
                {data.current.weather[0].description}
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:gap-16">
            <ul className="divide-y divide-violet-700 capitalize">
              <li>
                <HorizontalTable
                  title="Feels Like"
                  value={
                    isCelsius
                      ? fahrenheitToCelsius(data.current.feels_like)
                      : data.current.feels_like
                  }
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
                <HorizontalTable title="Clouds" value={data.current.clouds} valueSymbol="%" />
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
          <div className="flex gap-8 text-sm lg:flex-col lg:gap-0">
            <div className="flex flex-col items-center ">
              <Sunrise className="w-14" />
              <div className="flex gap-2">
                <span>sunrise</span>
                <span>
                  {convertEpochToTime({
                    epoch: data.current.sunrise,
                    offset: data.timezone_offset,
                  })}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Sunset className="w-14" />
              <div className="flex gap-2">
                <span>sunset</span>
                <span>
                  {convertEpochToTime({ epoch: data.current.sunset, offset: data.timezone_offset })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {data.hourly.length >= 2 && (
        <section className="bg-primary mt-4 w-full rounded-lg px-4 py-2 shadow-lg">
          <HourlyWeather
            data={data.hourly}
            timezoneOffset={data.timezone_offset}
            isCelsuis={isCelsius}
          />
        </section>
      )}
    </div>
  );
};

export default WeatherCard;
