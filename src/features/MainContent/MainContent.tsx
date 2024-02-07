import { Video } from '@/components/Video/Video';
import { BriefCard } from './BriefCard/BriefCard';
import Styles from './MainContent.module.scss';
import { WeekList } from './WeekList/WeekList';
import { DayList } from './DayList/DayList';
import { RateList } from './RateList/RateList';

export function MainContent() {
  return (
    <div className={Styles.container}>
      <Video src='./snows.mp4' className={Styles['container--background']} />
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
