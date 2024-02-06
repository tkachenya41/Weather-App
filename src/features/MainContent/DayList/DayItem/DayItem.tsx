import Image from 'next/image';
import Styles from './DayItem.module.scss';

export function DayItem() {
  return (
    <div className={Styles.container}>
      <p>10AM</p>
      <Image src={'./cloudsIcon.svg'} alt='icon' width={28} height={28} />
      <p>21°</p>
    </div>
  );
}
