export type WeatherData = {
  current: {
    time: string;
    temperature2m: string;
    relativeHumidity2m: string;
    isDay: string;
  };
  daily: {
    time: string[];
    temperature2mMax: Float32Array;
    temperature2mMin: Float32Array;
    weatherCode: Float32Array;
  };
};
