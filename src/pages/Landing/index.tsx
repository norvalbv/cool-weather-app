import React, { useState } from 'react';
import { useWeather } from 'services';
import Loader from 'components/Loader';
import data from '__mocks__/WeatherApiMockData.json';
import WebStats from 'components/WebStats';
import WeatherCard from 'components/WeatherCard';
import ButtonGroup from 'components/ButtonGroup';
import { WeatherApiData } from 'types';

const Landing = () => {
  // const { data } = useWeather({ lat: 10, lon: 10 });
  const [weather, setWeather] = useState('current-weather');

  if (!data) return <Loader />;

  return (
    <div className="relative h-screen">
      {/* <WebStats /> */}
      <ButtonGroup
        className="my-10 flex w-full items-center justify-center"
        onclick={(key): void => setWeather(key)}
        activeKey={weather}
      />
      <WeatherCard className="mx-auto" data={data as WeatherApiData} weather={weather} />
    </div>
  );
};

export default Landing;
