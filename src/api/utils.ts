import { WeatherApiResponse } from '@openmeteo/sdk/weather-api-response';

export function processWeatherData(response: WeatherApiResponse) {
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const current = response.current()!;
  const daily = response.daily()!;

  return {
    current: {
      time: new Date(
        (Number(current.time()) + utcOffsetSeconds) * 1000,
      ).toLocaleDateString(),
      temperature2m: `${current.variables(0)!.value().toFixed()}°C`,
      relativeHumidity2m: `${current.variables(1)!.value()}%`,
      isDay: current.variables(2)!.value() ? 'Day' : 'Night',
    },
    daily: {
      time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000).toLocaleDateString(),
      ),
      temperature2mMax: daily.variables(0)!.valuesArray()!,
      temperature2mMin: daily.variables(1)!.valuesArray()!,
      weatherCode: daily.variables(2)!.valuesArray()!,
    },
  };
}
