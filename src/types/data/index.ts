export type WeatherApiData = {
  lat: number;
  lon: number;
  alerts?: object[];
  current: object;
  daily: object[];
  hourly: object[];
  minutely: object[];
  timezone: string;
  timezone_offset: number;
};
