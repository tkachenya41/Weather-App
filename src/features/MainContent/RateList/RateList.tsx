import { useWeather } from '@/contexts/WeatherContext/WeatherContext';
import { RateItem } from './RateItem/RateItem';
import Styles from './RateList.module.scss';
import { generateRateItems } from './utils';

export function RateList() {
  const { weather } = useWeather();
  const rateItems = generateRateItems(weather);

  return (
    <div className={Styles.container}>
      {weather &&
        rateItems.map((item, index) => {
          return <RateItem key={index} {...item} />;
        })}
    </div>
  );
}
