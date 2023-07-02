type Weather = { description: string; icon: string; id: number; main: string };

export type WeatherBase = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
};

type DailyWeather = {
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pop: number;
  rain: number;
} & WeatherBase;

type HourlyWeather = {
  pop?: number;
  rain?: { [key: string]: number };
} & WeatherBase;

type CurrentWeather = {
  sunrise: number;
  sunset: number;
} & WeatherBase;

type MinutelyWeather = {
  dt: number;
  precipitation: number;
};

export type Alerts = {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: unknown[];
};

export type WeatherApiData = {
  lat: number;
  lon: number;
  alerts?: Alerts[];
  current: CurrentWeather;
  daily: DailyWeather[];
  hourly: HourlyWeather[];
  minutely: MinutelyWeather[];
  timezone: string;
  timezone_offset: number;
};

export type ButtonGroupKeys = 'current-weather' | 'forecast';
