import React from 'react';
import { useWeather } from 'services';
import axios from 'axios';
import Loader from 'components/Loader';
import data from '../../__mocks__/WeatherApiMockData.json';
import WebStats from 'components/WebStats';
import Banner from 'components/Banner';
import WeatherCard from 'components/WeatherCard';

const Landing = () => {
  // const { data } = useWeather({ lat: 10, lon: 10 });
  console.log(data);

  if (!data) return <Loader />;

  return (
    <div className="h-screen">
      {/* <Banner /> */}
      {/* <WebStats /> */}
      <WeatherCard className="mx-auto my-10" />
    </div>
  );
};

export default Landing;
