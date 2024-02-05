import { API_URL } from './constants';
import { fetchWeatherApi } from 'openmeteo';
import { processWeatherData } from './utils';

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
    current: ['temperature_2m', 'relative_humidity_2m', 'is_day'],
    daily: ['temperature_2m_max', 'temperature_2m_min', 'weather_code'],
  };

  const responses = await fetchWeatherApi(API_URL, params);

  const response = responses[0];

  return processWeatherData(response);
};
