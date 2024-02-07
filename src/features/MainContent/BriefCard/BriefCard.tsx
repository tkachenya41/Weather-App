import Styles from './BriefCard.module.scss';

export function BriefCard() {
  return (
    <div className={Styles.container}>
      <span>Minsk</span>
      <h5>21°</h5>
      <p>Partly snow</p>
      <p>H:29° L:15°</p>
    </div>
  );
}
