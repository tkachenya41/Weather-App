import { Video } from '@/components/Video/Video';
import { BriefCard } from './BriefCard/BriefCard';
import Styles from './MainContent.module.scss';
import { WeekList } from './WeekList/WeekList';
import { DayList } from './DayList/DayList';
import { RateList } from './RateList/RateList';
import { useWeather } from '@/contexts/WeatherContext/WeatherContext';
import { weatherIcons, weatherVideos } from '@/api/constants';

export function MainContent() {
  const { weather } = useWeather();

  return (
    <div className={Styles.container}>
      {weather && (
        <Video
          src={
            weather.current.isDay
              ? weatherVideos[weather.current.weatherCode]
              : './strong-wind.mp4'
          }
          className={Styles['container--background']}
        />
      )}
      <BriefCard />
      <div className={Styles['container--lists']}>
        <WeekList />
        <div className={Styles['container--days']}>
          <DayList />
          <RateList />
        </div>
      </div>
    </div>
  );
}
