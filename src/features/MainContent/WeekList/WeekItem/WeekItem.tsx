import Image from 'next/image';
import Styles from './WeekItem.module.scss';
import { ProgressBar } from '@/components/Icons/ProgressBar';

export function WeekItem() {
  return (
    <div className={Styles.container}>
      <div className={Styles['container--days']}>
        <p>Mon</p>
        <Image src={'./cloudsIcon.svg'} alt='icon' width={28} height={28} />
      </div>
      <div className={Styles['container--weather']}>
        <p>18°</p>
        <ProgressBar />
        <p>27°</p>
      </div>
    </div>
  );
}
