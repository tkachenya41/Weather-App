import Image from 'next/image';
import Styles from './DayItem.module.scss';
import { HourData } from '@/api/WeatherData';
import { weatherIcons } from '@/api/constants';

export function DayItem({ weather }: { weather: HourData | null }) {
  return (
    <div className={Styles.container}>
      {weather && (
        <>
          <span>
            {typeof weather.time === 'string'
              ? weather.time
              : weather.time.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  hour12: true,
                })}
          </span>
          <Image
            src={weatherIcons[weather.weatherCode]}
            alt='icon'
            width={28}
            height={28}
          />
          <span>{weather.precipitationProbability}%</span>
          <p>{weather.temperature2m}°</p>
        </>
      )}
    </div>
  );
}
