import { useWeather } from '@/contexts/WeatherContext/WeatherContext';
import { WeekItem } from './WeekItem/WeekItem';
import Styles from './WeekList.module.scss';
import { DayData } from '@/api/WeatherData';

export function WeekList() {
  const { weather } = useWeather();

  return (
    <div className={Styles.container}>
      <p>7-DAY FORECAST</p>
      {weather &&
        weather.daily.time.map((item, index) => {
          const time = index === 0 ? 'Now' : item;
          const weatherData: DayData = {
            time: time,
            temperature2mMax: weather.daily.temperature2mMax[index].toFixed(),
            temperature2mMin: weather.daily.temperature2mMin[index].toFixed(),
            weatherCode: weather.daily.weatherCode[index],
            precipitationProbability: weather.daily.precipitationProbability[index],
          };
          return <WeekItem key={item.toLocaleString()} weather={weatherData} />;
        })}
    </div>
  );
}
