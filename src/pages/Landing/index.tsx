import Loader from 'components/Loader';
import React from 'react';
import { useWeather } from 'services';

const Landing = () => {
  const { data } = useWeather({ lat: 10, lon: 10 });
  console.log(data);

  if (!data) return <Loader />;

  return <div>Landing</div>;
};

export default Landing;
