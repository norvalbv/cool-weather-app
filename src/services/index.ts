import useRequest from 'hooks/network/useRequest';
import { useSWRConfig } from 'swr';
import { ApiResponse, WeatherApiData } from 'types';

export type UseWeather = {
  lat: number | null;
  lon: number | null;
};

const key = process.env.API_KEY;

export type WeatherReturnType = ApiResponse<WeatherApiData>;

/**
 * Get full weather data
 */
export const useWeather = ({ lat, lon }: UseWeather): WeatherReturnType => {
  if ((!lat && lat !== 0) || (!lon && lon !== 0)) throw new Error();

  const { cache } = useSWRConfig();

  // eslint-disable-next-line no-console
  console.log(cache);

  const uri = key
    ? `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}`
    : '';

  return useRequest({ uri });
};
