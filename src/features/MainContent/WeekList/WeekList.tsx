import { WeekItem } from './WeekItem/WeekItem';
import Styles from './WeekList.module.scss';

export function WeekList() {
  return (
    <div className={Styles.container}>
      <p>7-DAY FORECAST</p>
      <WeekItem />
      <WeekItem />
      <WeekItem />
      <WeekItem />
      <WeekItem />
      <WeekItem />
      <WeekItem />
    </div>
  );
}
