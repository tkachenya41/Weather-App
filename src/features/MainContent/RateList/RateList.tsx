import { RateItem } from './RateItem/RateItem';
import Styles from './RateList.module.scss';

export function RateList() {
  return (
    <div className={Styles.container}>
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
    </div>
  );
}
