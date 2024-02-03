'use client';

import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { fetchWeather } from '@/api/fetchWeather';
import { WeatherData } from '@/api/WeatherData';
import { Minsk, errorText } from '@/api/constants';

export default function Home() {
  const [response, setResponse] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async function () {
      try {
        const weatherData = await fetchWeather(Minsk);
        setResponse(weatherData);
      } catch (err) {
        setError(errorText);
        console.error(err);
      }
    })();
  }, []);

  return (
    <main className={styles.main}>
      {error && <div className={styles.container}>{error}</div>}
      {response && (
        <div className={styles.container}>
          <h2>Current Weather</h2>
          <h4>Date: {response.current.time}</h4>
          <p>Temperature: {response.current.temperature2m}</p>
          <p>Humidity: {response.current.relativeHumidity2m}</p>
          <p>Day/Night: {response.current.isDay}</p>

          <h2>Daily Forecast</h2>
          {response.daily.time.map((time, index) => (
            <div key={index}>
              <h4>Date: {time}</h4>
              <p>Max Temperature: {response.daily.temperature2mMax[index].toFixed()}°C</p>
              <p>Min Temperature: {response.daily.temperature2mMin[index].toFixed()}°C</p>
              <p>Weather Code: {response.daily.weatherCode[index]}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
