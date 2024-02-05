import Styles from './Card.module.scss';

export const Card = () => {
  return (
    <div className={Styles.card}>
      <video autoPlay muted loop className={Styles['card--background']}>
        <source src='./clouds.mp4' type='video/mp4' />
      </video>
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
};
