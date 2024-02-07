import Image from 'next/image';
import Styles from './RateItem.module.scss';

export function RateItem() {
  return (
    <div className={Styles.container}>
      <div>
        <div className={Styles['container--title']}>
          <Image src={'./humidity.svg'} alt='icon' width={28} height={28} />
          <p>HUMIDITY</p>
        </div>
        <span>54%</span>
      </div>
      <p>The dew point is 21° right now.</p>
    </div>
  );
}
