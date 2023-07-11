import React, { useState } from 'react';
import { useWeather } from 'services';
import Loader from 'components/Loader';
import WeatherCard from 'components/WeatherCard';
import ButtonGroup from 'components/ButtonGroup';
import { ButtonGroupKeys, WeatherApiData } from 'types';
import Search, { SearchValue } from 'components/Search';

const Landing = () => {
  const [latLon, setLatLon] = useState<SearchValue>({ lat: 10, lon: 10 });
  const { data } = useWeather(latLon);
  const [weather, setWeather] = useState<ButtonGroupKeys>('current-weather');

  console.log(data, latLon);
  if (!data) return <Loader />;

  return (
    <div className="relative mx-auto max-w-4xl">
      <ButtonGroup
        className="my-10 flex w-full items-center justify-center"
        onclick={(key): void => setWeather(key)}
        activeKey={weather}
      />
      <div className="my-4 flex flex-col items-center gap-4 md:items-start">
        <h2 className="dark:text-white">Search for new location</h2>
        <Search setLatLon={setLatLon} />
      </div>
      <WeatherCard data={data as unknown as WeatherApiData} weather={weather} />
    </div>
  );
};

export default Landing;
