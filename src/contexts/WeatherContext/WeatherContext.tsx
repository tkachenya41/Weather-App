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
    throw new Error('useWeather must be used within a WeatherProvide');
  }

  return context;
}
