import React from 'react';
import { useWeather } from 'services';
import axios from 'axios';
import Loader from 'components/Loader';
import data from '../../__mocks__/WeatherApiMockData.json';
import WebStats from 'components/WebStats';

const Landing = () => {
  // const { data } = useWeather({ lat: 10, lon: 10 });
  console.log(data);

  if (!data) return <Loader />;

  return (
    <div className="h-screen">
      <WebStats />
    </div>
  );
};

export default Landing;
