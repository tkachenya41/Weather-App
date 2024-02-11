'use client';
import { ReactNode, useState } from 'react';
import { WeatherData } from '@/api/WeatherData';
import { WeatherContext } from './WeatherContext';

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}
