import { WeatherData } from '@/api/WeatherData';

export const generateRateItems = (weather: WeatherData | null) => {
  return [
    {
      title: 'HUMIDITY',
      value: weather?.current.relativeHumidity2m!,
      description: 'The dew point is 21° right now.',
      src: './humidity.svg',
    },
    {
      title: 'UV-INDEX',
      value: weather?.hourly.uvIndex[0].toFixed()!,
      description: 'Middle for the rest of the day.',
      src: './uvIndex.svg',
    },
    {
      title: 'FEELS LIKE',
      value: `${weather?.current.apparentTemperature.toFixed()!}°`,
      description: 'Similar to the actual temperature',
      src: './feelsLike.svg',
    },
    {
      title: 'VISIBILITY',
      value: `${(weather?.hourly.visibility[0]! / 1000).toFixed()}KM`,
      description: 'Visibility is good',
      src: './visibility.svg',
    },
  ];
};
