import { weatherIcons } from 'components/constants/weatherIcons';
import React, { ReactElement } from 'react';
import { CurrentWeather } from 'types';
import convertEpochToTime from 'utils/convertToTime';

type HourlyWeatherProps = {
  data: CurrentWeather[];
  timezoneOffset: number;
};

const HourlyWeather = ({ data, timezoneOffset }: HourlyWeatherProps): ReactElement => {
  const processedData = data.slice(1, 8);
  return (
    <div className="flex flex-wrap divide-violet-700 md:flex-nowrap md:divide-x">
      {processedData.map((weather) => (
        <div className="flex w-32 flex-col items-center justify-center gap-1">
          <span>{convertEpochToTime({ epoch: weather.dt, offset: timezoneOffset })}</span>
          <div className="w-20">{weatherIcons[weather.weather[0].description]}</div>
          <span>{weather.temp}&deg;</span>
        </div>
      ))}
    </div>
  );
};

export default HourlyWeather;
