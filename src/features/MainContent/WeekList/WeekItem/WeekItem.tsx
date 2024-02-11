import Image from 'next/image';
import Styles from './WeekItem.module.scss';
import { ProgressBar } from '@/components/Icons/ProgressBar';
import { DayData } from '@/api/WeatherData';
import { weatherIcons } from '@/api/constants';

export function WeekItem({ weather }: { weather: DayData | null }) {
  return (
    <div className={Styles.container}>
      {weather && (
        <>
          <div className={Styles['container--days']}>
            <p>{weather.time.toLocaleString('en-us', { weekday: 'short' })}</p>
            <div className={Styles['container--precipitation']}>
              <Image
                src={weatherIcons[weather.weatherCode]}
                alt='icon'
                width={28}
                height={28}
              />
              <p>{weather.precipitationProbability}%</p>
            </div>
          </div>
          <div className={Styles['container--weather']}>
            <p> {weather.temperature2mMin}°</p>
            <ProgressBar />
            <p> {weather.temperature2mMax}°</p>
          </div>
        </>
      )}
    </div>
  );
}
