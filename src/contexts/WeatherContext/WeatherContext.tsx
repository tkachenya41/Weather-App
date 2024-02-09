import { WeatherData } from '@/api/WeatherData';
import { createContext, useContext } from 'react';

export interface WeatherContextProps {
  weather: WeatherData | null;
  setWeather: (weather: WeatherData) => void;
}

export const WeatherContext = createContext<WeatherContextProps>({
  weather: null,
  setWeather: () => {},
});

export function useWeather(): WeatherContextProps {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  // idnvenoij

  return context;
}
