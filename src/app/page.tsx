import { SideBar } from '@/features/SideBar/Sidebar';
import styles from './page.module.scss';
import { MainContent } from '@/features/MainContent/MainContent';

export default function Home() {
  return (
    <main className={styles.main}>
      <MainContent />
      <SideBar />
    </main>
  );
}
