import Image from 'next/image';
import Styles from './RateItem.module.scss';

interface RateItemProps {
  title: string;
  value: number | string;
  description: string;
  src: string;
}

export function RateItem({ title, value, description, src }: RateItemProps) {
  return (
    <div className={Styles.container}>
      <div>
        <div className={Styles['container--title']}>
          <Image src={src} alt='icon' width={28} height={28} />
          <p>{title}</p>
        </div>
        <span>{value}</span>
      </div>
      <p>{description}</p>
    </div>
  );
}
