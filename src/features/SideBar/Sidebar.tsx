import { Card } from './Card/Card';
import Styles from './SideBar.module.scss';

export function SideBar() {
  return (
    <aside className={Styles.container}>
      <Card />
      <Card />
    </aside>
  );
}
