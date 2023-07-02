type Weather = { description: string; icon: string; id: number; main: string };

export type CurrentWeather = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop?: number;
  pressure: number;
  rain?: { [key: string]: number };
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
};

export type WeatherApiData = {
  lat: number;
  lon: number;
  alerts?: object[];
  current: CurrentWeather;
  daily: object[];
  hourly: CurrentWeather[];
  minutely: object[];
  timezone: string;
  timezone_offset: number;
};
