import React, { ReactElement } from 'react';
import { weatherIcons } from 'constants/weatherIcons';
import { WeatherBase } from 'types';
import { convertEpochTo24HrTime } from 'utils/convertToTime';
import fahrenheitToCelsius from 'utils/fahrenheitToCelcuis';
import tempValidator from 'utils/tempValidator';

type RowWeatherCardProps = {
  data: WeatherBase[];
  timezoneOffset: number;
  isCelsius: boolean;
};

const RowWeatherCard = ({ data, timezoneOffset, isCelsius }: RowWeatherCardProps): ReactElement => {
  return (
    <div className="flex flex-wrap divide-violet-700 md:flex-nowrap md:divide-x">
      {data.map((weather, idx) => {
        const processedTemperature = tempValidator(weather.temp);

        return (
          <div
            className="flex w-32 flex-col items-center justify-center gap-1"
            key={`${weather.dt}_${idx}`}
          >
            <span>{convertEpochTo24HrTime({ epoch: weather.dt, offset: timezoneOffset })}</span>
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
