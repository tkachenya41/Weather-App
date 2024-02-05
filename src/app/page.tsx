
import { SideBar } from '@/features/SideBar/Sidebar';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <SideBar />
    </main>
  );
}
