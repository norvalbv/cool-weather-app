import React, { ReactElement } from 'react';
import { weatherIcons } from 'components/constants/weatherIcons';
import { WeatherBase } from 'types';
import { convertEpochTo24HrTime } from 'utils/convertToTime';
import fahrenheitToCelsius from 'utils/fahrenheitToCelcuis';

type HourlyWeatherProps = {
  data: WeatherBase[];
  timezoneOffset: number;
  isCelsius: boolean;
};

const HourlyWeather = ({ data, timezoneOffset, isCelsius }: HourlyWeatherProps): ReactElement => {
  const processedData = data.slice(1, 8);
  return (
    <div className="flex flex-wrap divide-violet-700 md:flex-nowrap md:divide-x">
      {processedData.map((weather, idx) => (
        <div
          className="flex w-32 flex-col items-center justify-center gap-1"
          key={`${weather.dt}_${idx}`}
        >
          <span>{convertEpochTo24HrTime({ epoch: weather.dt, offset: timezoneOffset })}</span>
          <div className="w-20">{weatherIcons[weather.weather[0].description]}</div>
          {/* <span>{isCelsius ? fahrenheitToCelsius(weather.temp) : weather.temp}&deg;</span> */}
        </div>
      ))}
    </div>
  );
};

export default HourlyWeather;
