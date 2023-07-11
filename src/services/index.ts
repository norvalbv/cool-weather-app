import useRequest from 'hooks/network/useRequest';

export type UseWeather = {
  lat: number | null;
  lon: number | null;
};

const key = process.env.API_KEY;

/**
 * Get full weather data
 */
export const useWeather = ({ lat, lon }: UseWeather) => {
  console.log(lat, lon);
  // if (lat !== 'number' || lon !== 'number') throw new Error();

  const uri = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}`;

  return useRequest({ uri });
};
