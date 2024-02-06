import { Video } from '@/components/Video/Video';
import Styles from './Card.module.scss';

export function Card() {
  return (
    <div className={Styles.card}>
      <Video src='./clouds.mp4' className={Styles['card--background']} />
      <div className={Styles['card--overlay']}></div>

      <div className={Styles['card--text']}>
        <div>
          <h3>My location</h3>
          <p>Minsk</p>
        </div>
        <p>Partly Cloudy</p>
      </div>
      <div className={Styles['card--weather']}>
        <h3>21°</h3>
        <p>H:29° L:15°</p>
      </div>
    </div>
  );
}
