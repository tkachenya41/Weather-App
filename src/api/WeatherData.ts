export type WeatherData = {
  current: {
    time: string;
    temperature2m: string;
    relativeHumidity2m: number;
    apparentTemperature: number;
    isDay: string;
    weatherCode: number;
  };
  daily: {
    time: Date[];
    temperature2mMax: Float32Array;
    temperature2mMin: Float32Array;
    weatherCode: Float32Array;
    precipitationProbability: Float32Array;
  };
  hourly: {
    time: Date[];
    temperature2m: Float32Array;
    weatherCode: Float32Array;
    precipitationProbability: Float32Array;
    visibility: Float32Array;
    uvIndex: Float32Array;
  };
};

export type HourData = {
  time: Date | string;
  temperature2m: string;
  weatherCode: number;
  precipitationProbability: number;
};
export type DayData = {
  time: Date | string;
  temperature2mMax: string;
  temperature2mMin: string;
  weatherCode: number;
  precipitationProbability: number;
};
