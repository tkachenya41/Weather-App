'use client';

import { SideBar } from '@/features/SideBar/Sidebar';
import styles from './page.module.scss';
import { MainContent } from '@/features/MainContent/MainContent';
import SideBarButton from '@/features/SideBar/SideBarButton';
import { useEffect, useState } from 'react';
import { fetchWeather } from '@/api/fetchWeather';
import { Minsk, errorText } from '@/api/constants';
import { useWeather } from '@/contexts/WeatherContext/WeatherContext';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { weather, setWeather } = useWeather();
  const [error, setError] = useState('');

  const toggleBurger = () => {
    setIsOpen((hasBeenOpened) => !hasBeenOpened);
  };

  useEffect(() => {
    (async function () {
      try {
        const weatherData = await fetchWeather(Minsk);
        setWeather(weatherData);
        console.log(weatherData);
      } catch (err) {
        setError(errorText);
        console.error(err);
      }
    })();
  }, []);

  return (
    <main className={styles.main}>
      {error && <div className={styles.container}>{error}</div>}
      <MainContent />
      <SideBarButton isOpen={isOpen} onClick={toggleBurger} />
      <SideBar isOpen={isOpen} makeOpen={toggleBurger} />
    </main>
  );
}
