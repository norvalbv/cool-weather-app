import React, { ReactElement, useState } from 'react';
import CodeIcon from 'components/SVG/CodeIcon';
import { CurrentWeather, DailyWeather, WeatherApiData } from 'types';
import classNames from 'utils/classNames';
import Toggle from 'components/Toggle';
import Sunrise from 'components/SVG/Weather/Sunrise';
import Sunset from 'components/SVG/Weather/Sunset';
import HorizontalTable from 'components/HorizontalTable';
import { weatherIcons } from 'constants/weatherIcons';
import RowWeatherCard from './RowWeatherCard';
import { convertEpochTo24HrTime, convertToDate } from 'utils/convertToTime';
import fahrenheitToCelsius from 'utils/fahrenheitToCelcuis';
import tempValidator from 'utils/tempValidator';

type CurrentCardProps = {
  data: CurrentWeather;
  isCelsius: boolean;
  timezone_offset: number;
};

const CurrentCard = ({ data, isCelsius, timezone_offset }: CurrentCardProps): ReactElement => {
  const processedTemperature = tempValidator(data.temp);
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row">
      <div className="flex items-center gap-8 md:w-96">
        <div className="h-32 w-32">{weatherIcons[data.weather[0].description]}</div>
        <div>
          <h2 className="text-3xl">
            {isCelsius ? fahrenheitToCelsius(processedTemperature) : processedTemperature}&deg;
          </h2>
          <span className="mb-4 inline-block capitalize">{data.weather[0].description}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:gap-16">
        <ul className="divide-y divide-violet-700 capitalize">
          <li>
            <HorizontalTable
              title="Feels Like"
              value={isCelsius ? fahrenheitToCelsius(data.feels_like) : data.feels_like}
              valueSymbol="°"
            />
          </li>
          <li>
            <HorizontalTable title="Humidity" value={data.humidity} valueSymbol="%" />
          </li>
          <li>
            <HorizontalTable title="Pressue" value={data.pressure} />
          </li>
          <li>
            <HorizontalTable title="UVI" value={data.uvi} />
          </li>
        </ul>
        <ul className="divide-y divide-violet-700 capitalize">
          <li>
            <HorizontalTable title="Clouds" value={data.clouds} valueSymbol="%" />
          </li>
          <li>
            <HorizontalTable title="Wind" value={data.wind_deg} />
          </li>
          <li>
            <HorizontalTable title="Wind Gust" value={data.wind_gust} />
          </li>
          <li>
            <HorizontalTable title="Wind Speed" value={data.wind_speed} />
          </li>
        </ul>
      </div>
      <div className="flex gap-8 text-sm lg:flex-col lg:gap-0">
        <div className="flex flex-col items-center ">
          <Sunrise className="w-14" />
          <div className="flex gap-2">
            <span>sunrise</span>
            <span>
              {convertEpochTo24HrTime({
                epoch: data.sunrise,
                offset: timezone_offset,
              })}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Sunset className="w-14" />
          <div className="flex gap-2">
            <span>sunset</span>
            <span>
              {convertEpochTo24HrTime({
                epoch: data.sunset,
                offset: timezone_offset,
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

type ForecastCardProps = {
  data: DailyWeather[];
  isCelsius: boolean;
  timezoneOffset: number;
};

const ForecastCard = ({ data, isCelsius, timezoneOffset }: ForecastCardProps): ReactElement => {
  const processedData = data.slice(1, 8);

  return (
    <div className="flex flex-col divide-y divide-violet-700">
      {processedData.map((weather, idx) => {
        const averageDailyTemp = tempValidator(weather.temp);

        return (
          <div className="relative py-4">
            <h2 className="absolute left-4 top-4 text-xl tracking-wider">
              Date:&nbsp;
              {convertToDate(weather.dt * 1000, false, { type: 'short' })}
            </h2>
            <div className="flex items-center justify-between" key={`${weather.dt}_${idx}`}>
              <div className="flex gap-4">
                <div className="h-20 w-20">{weatherIcons[weather.weather[0].description]}</div>
                <div className="flex flex-col items-center justify-center">
                  <p>Average temp:</p>
                  <span>
                    {isCelsius ? fahrenheitToCelsius(averageDailyTemp) : averageDailyTemp}&deg;
                  </span>
                </div>
              </div>
              <div className="flex w-40 flex-col items-center justify-center gap-2 text-center">
                <p className="font-semibold">Summary:</p>
                <p>{weather.summary}</p>
              </div>
              <div className="flex gap-8 text-sm lg:flex-col lg:gap-0">
                <div className="flex flex-col items-center ">
                  <Sunrise className="w-14" />
                  <div className="flex gap-2">
                    <span>sunrise</span>
                    <span>
                      {convertEpochTo24HrTime({
                        epoch: weather.sunrise,
                        offset: timezoneOffset,
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Sunset className="w-14" />
                  <div className="flex gap-2">
                    <span>sunset</span>
                    <span>
                      {convertEpochTo24HrTime({
                        epoch: weather.sunset,
                        offset: timezoneOffset,
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="divide-y divide-violet-700 capitalize">
                <li>
                  <HorizontalTable title="Wind" value={weather.wind_speed} />
                </li>
                <li>
                  <HorizontalTable title="Humidity" value={weather.humidity} valueSymbol="%" />
                </li>
                <li>
                  <HorizontalTable title="Pressue" value={weather.pressure} />
                </li>
                <li>
                  <HorizontalTable title="UVI" value={weather.uvi} />
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

type WeatherCardProps = {
  className?: string;
  data: WeatherApiData;
  weather: string;
};

const WeatherCard = ({ className, data, weather }: WeatherCardProps): ReactElement => {
  const [isCelsius, setIsCelsius] = useState(false);
  return (
    <div
      className={classNames(
        'bg-secondary max-w-4xl rounded-lg p-6 shadow-2xl dark:bg-gray-900 dark:text-gray-200',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-200">
          Weather {weather === 'current-weather' ? 'Today' : 'Over the Next Few days'} in&nbsp;
          {`${data.lat} ${data.lon}`}
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
            <span className="block text-xl font-light tracking-wider">
              {weather === 'current-weather' ? 'Current Weather' : '7 Day Forecast'}
            </span>
            <span className="block">
              Current Time:&nbsp;
              {convertEpochTo24HrTime({ epoch: data.current.dt, offset: data.timezone_offset })}
            </span>
          </div>
          <Toggle
            labelLeft="F"
            labelRight="C"
            onclick={(): void => setIsCelsius(!isCelsius)}
            isChecked={isCelsius}
          />
        </div>
        {weather === 'current-weather' ? (
          <CurrentCard
            data={data.current}
            timezone_offset={data.timezone_offset}
            isCelsius={isCelsius}
          />
        ) : (
          <ForecastCard
            data={data.daily}
            isCelsius={isCelsius}
            timezoneOffset={data.timezone_offset}
          />
        )}
      </section>
      {weather === 'current-weather' && (
        <>
          {data.hourly.length >= 2 && (
            <section className="bg-primary mt-4 w-full rounded-lg px-4 py-2 shadow-lg">
              <h2 className="mb-4 text-xl font-light tracking-wider">Hourly Forecast</h2>
              <RowWeatherCard
                data={data.hourly.slice(1, 8)}
                timezoneOffset={data.timezone_offset}
                isCelsius={isCelsius}
                type="hourly"
              />
            </section>
          )}
          <section className="bg-primary mt-4 w-full rounded-lg px-4 py-2 shadow-lg">
            <h2 className="mb-4 text-xl font-light tracking-wider">Daily Forecast</h2>
            <RowWeatherCard
              data={data.daily.slice(1, 8)}
              timezoneOffset={data.timezone_offset}
              isCelsius={isCelsius}
              type="daily"
            />
          </section>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
