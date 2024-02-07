'use client';

import { SideBar } from '@/features/SideBar/Sidebar';
import styles from './page.module.scss';
import { MainContent } from '@/features/MainContent/MainContent';
import SideBarButton from '@/features/SideBar/SideBarButton';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen((hasBeenOpened) => !hasBeenOpened);
  };

  return (
    <main className={styles.main}>
      <MainContent />
      <SideBarButton isOpen={isOpen} onClick={toggleBurger} />
      <SideBar isOpen={isOpen} makeOpen={toggleBurger} />
    </main>
  );
}
