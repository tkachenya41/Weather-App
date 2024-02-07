import { Video } from '@/components/Video/Video';
import Styles from './Card.module.scss';

export function Card() {
  return (
    <div className={Styles.card}>
      <Video src='./clouds.mp4' className={Styles['card--background']} />
      <div className={Styles['card--overlay']}></div>

      <div className={Styles['card--text']}>
        <div>
          <span>My location</span>
          <p>Minsk</p>
        </div>
        <p>Partly Cloudy</p>
      </div>
      <div className={Styles['card--weather']}>
        <span>21°</span>
        <p>H:29° L:15°</p>
      </div>
    </div>
  );
}
