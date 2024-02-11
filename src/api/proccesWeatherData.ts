import { WeatherApiResponse } from '@openmeteo/sdk/weather-api-response';
import { weatherCodes } from './constants';
import { createRangeArray, findCurrentIndex, getNextSevenItems } from './utils';

export function processWeatherData(response: WeatherApiResponse) {
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const current = response.current()!;
  const daily = response.daily()!;
  const hourly = response.hourly()!;
  const currentDate = new Date();
  const currentHour = findCurrentIndex(hourly, currentDate, utcOffsetSeconds);

  return {
    current: {
      time: new Date(
        (Number(current.time()) + utcOffsetSeconds) * 1000,
      ).toLocaleDateString(),
      temperature2m: `${current.variables(0)!.value().toFixed()}°C`,
      relativeHumidity2m: `${current.variables(1)!.value()}%`,
      apparentTemperature: current.variables(2)!.value(),
      isDay: current.variables(3)!.value(),
      weatherCode: current.variables(4)!.value(),
    },
    daily: {
      time: createRangeArray(daily, utcOffsetSeconds),
      temperature2mMax: getNextSevenItems(daily, 0, 0),
      temperature2mMin: getNextSevenItems(daily, 0, 1),
      weatherCode: getNextSevenItems(daily, 0, 2),
      precipitationProbability: getNextSevenItems(daily, 0, 3),
    },
    hourly: {
      time: createRangeArray(hourly, utcOffsetSeconds).slice(
        currentHour,
        currentHour + 8,
      ),
      temperature2m: getNextSevenItems(hourly, currentHour, 0),
      weatherCode: getNextSevenItems(hourly, currentHour, 2),
      precipitationProbability: getNextSevenItems(hourly, currentHour, 1),
      visibility: hourly
        .variables(3)!
        .valuesArray()!
        .slice(currentHour, currentHour + 1),
      uvIndex: hourly
        .variables(4)!
        .valuesArray()!
        .slice(currentHour, currentHour + 1),
    },
  };
}
