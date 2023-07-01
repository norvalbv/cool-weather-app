import useRequest from 'hooks/network/useRequest';

type UseWeather = {
  lat: number;
  lon: number;
  exclude?: 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts';
};

const key = process.env.API_KEY;
console.log(key);

/**
 * Get full weather data
 */
export const useWeather = ({ lat, lon, exclude }: UseWeather) => {
  if (!lat || !lon) throw new Error();

  // const { token, customerId } = useAuth();

  const uri = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=-${lon}&appid=${key}`;

  return useRequest({ uri });
};
