import React from 'react';
import { useWeather } from 'services';
import axios from 'axios';
import Loader from 'components/Loader';
import data from '../../__mocks__/WeatherApiMockData.json';
import WebStats from 'components/WebStats';
import Banner from 'components/Banner';
import WeatherCard from 'components/WeatherCard';
import ButtonGroup from 'components/ButtonGroup';

const Landing = () => {
  // const { data } = useWeather({ lat: 10, lon: 10 });
  console.log(data);

  if (!data) return <Loader />;

  return (
    <div className="relative h-screen">
      {/* <Banner /> */}
      {/* <WebStats /> */}
      <ButtonGroup className="my-10 flex w-full items-center justify-center" />
      <WeatherCard className="mx-auto" data={data} />
    </div>
  );
};

export default Landing;
