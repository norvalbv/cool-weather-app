import React, { ReactElement } from 'react';
import { weatherIcons } from 'constants/weatherIcons';
import { WeatherBase } from 'types';
import { convertEpochTo24HrTime, convertToDate } from 'utils/convertToTime';
import fahrenheitToCelsius from 'utils/fahrenheitToCelcuis';
import tempValidator from 'utils/tempValidator';

type RowWeatherCardProps = {
  data: WeatherBase[];
  timezoneOffset: number;
  isCelsius: boolean;
  type: 'hourly' | 'daily';
};

const RowWeatherCard = ({
  data,
  timezoneOffset,
  isCelsius,
  type,
}: RowWeatherCardProps): ReactElement => {
  return (
    <div className="flex flex-wrap divide-violet-700 md:flex-nowrap md:divide-x">
      {data.map((weather, idx) => {
        const processedTemperature = tempValidator(weather.temp);

        return (
          <div
            className="flex w-32 flex-col items-center justify-center gap-1"
            // eslint-disable-next-line react/no-array-index-key
            key={`${weather.dt}_${idx}`}
          >
            <span>
              {type === 'hourly'
                ? convertEpochTo24HrTime({ epoch: weather.dt, offset: timezoneOffset })
                : convertToDate(weather.dt * 1000, false, { type: 'short' })}
            </span>
            <div className="w-20">{weatherIcons[weather.weather[0].description]}</div>
            <span>
              {isCelsius
                ? fahrenheitToCelsius(tempValidator(processedTemperature))
                : processedTemperature}
              &deg;
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default RowWeatherCard;
