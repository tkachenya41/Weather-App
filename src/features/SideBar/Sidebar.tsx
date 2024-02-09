import { Card } from './Card/Card';
import Styles from './SideBar.module.scss';

export function SideBar({
  isOpen,
  makeOpen,
}: {
  isOpen?: boolean;
  makeOpen?: () => void;
}) {
  return (
    <aside className={Styles.container} data-open={isOpen} onClick={makeOpen}>
      <Card />
      <Card />
    </aside>
  );
}
