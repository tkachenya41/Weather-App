import { useWeather } from '@/contexts/WeatherContext/WeatherContext';
import { DayItem } from './DayItem/DayItem';
import Styles from './DayList.module.scss';
import { HourData } from '@/api/WeatherData';

export function DayList() {
  const { weather } = useWeather();
  return (
    <div className={Styles.container}>
      <p> Cloudy conditions from 1AM-9AM, with showers expected at 9AM. {}</p>

      <div className={Styles['container--days']}>
        {weather?.hourly.time.map((item, index) => {
          const time = index === 0 ? 'Now' : item;
          const weatherData: HourData = {
            time: time,
            temperature2m: weather.hourly.temperature2m[index].toFixed(),
            weatherCode: weather.hourly.weatherCode[index],
            precipitationProbability: weather.hourly.precipitationProbability[index],
          };
          return <DayItem weather={weatherData} key={index} />;
        })}
      </div>
    </div>
  );
}
