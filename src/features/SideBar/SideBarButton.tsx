import Image from 'next/image';
import Styles from './SideBar.module.scss';

export default function SideBarButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button className={Styles.button} onClick={onClick}>
      <Image
        src={isOpen ? '/close.svg' : '/burger.svg'}
        alt='burger'
        width={23}
        height={23}
      />
    </button>
  );
}
