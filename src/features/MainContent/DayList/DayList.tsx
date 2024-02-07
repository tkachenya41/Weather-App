import { DayItem } from './DayItem/DayItem';
import Styles from './DayList.module.scss';

export function DayList() {
  return (
    <div className={Styles.container}>
      <p> Cloudy conditions from 1AM-9AM, with showers expected at 9AM.</p>
      <div className={Styles['container--days']}>
        <DayItem />
        <DayItem />
        <DayItem />
        <DayItem />
        <DayItem />
        <DayItem />
        <DayItem />
        <DayItem />
      </div>
    </div>
  );
}
