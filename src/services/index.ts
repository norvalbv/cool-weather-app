type UseWeather = {
  lat: number;
  lon: number;
  exclude?: 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts';
};

const key = process.env.API_KEY;

/**
 * Get full weather data
 */
export const useWeather = ({ lat, lon, exclude }: UseWeather) => {
  // const { token, customerId } = useAuth();

  const uri = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}appid=${key}`;
};
