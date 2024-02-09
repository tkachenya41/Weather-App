import { API_URL } from './constants';
import { fetchWeatherApi } from 'openmeteo';
import { processWeatherData } from './proccesWeatherData';

export const fetchWeather = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const params = {
    latitude: latitude,
    longitude: longitude,
    current: ['temperature_2m', 'relative_humidity_2m', 'is_day', 'weather_code'],
    daily: [
      'temperature_2m_max',
      'temperature_2m_min',
      'weather_code',
      'precipitation_probability_max',
    ],
    hourly: ['temperature_2m', 'precipitation_probability', 'weather_code'],
  };

  const responses = await fetchWeatherApi(API_URL, params);

  const response = responses[0];

  return processWeatherData(response);
};
