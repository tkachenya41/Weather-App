import { useWeather } from '@/contexts/WeatherContext/WeatherContext';
import Styles from './BriefCard.module.scss';
import { weatherCodes } from '@/api/constants';

export function BriefCard() {
  const { weather } = useWeather();
  return (
    <>
      {weather && (
        <div className={Styles.container}>
          <span>Minsk</span>
          <h5>{weather.current.temperature2m}</h5>
          <p>{weatherCodes[weather.current.weatherCode]}</p>
          <p>
            H: {weather.daily.temperature2mMax[0].toFixed()}° L:{' '}
            {weather.daily.temperature2mMin[0].toFixed()}°
          </p>
        </div>
      )}
    </>
  );
}
