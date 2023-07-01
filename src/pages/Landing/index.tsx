import React from 'react';
import { useWeather } from 'services';

const Landing = () => {
  const { data } = useWeather({ lat: 10, lon: 10 });
  console.log(data);
  return <div>Landing</div>;
};

export default Landing;
