import { VariablesWithTime } from '@openmeteo/sdk/variables-with-time';

export const createRangeArray = (type: VariablesWithTime, utcOffsetSeconds: number) => {
  const startTime = Number(type.time());
  const endTime = Number(type.timeEnd());
  const interval = type.interval();
  return Array.from(
    { length: (endTime - startTime) / interval },
    (_, i) => new Date((startTime + i * interval + utcOffsetSeconds) * 1000),
  );
};

export const findCurrentIndex = (
  type: VariablesWithTime,
  current: Date,
  utcOffsetSeconds: number,
) => {
  const dateArray = createRangeArray(type, utcOffsetSeconds);
  return dateArray.findIndex((time) => current < time);
};

export const getNextSevenItems = (
  type: VariablesWithTime,
  currentIndex: number,
  indexOfArr: number,
) => {
  return type
    .variables(indexOfArr)!
    .valuesArray()!
    .slice(currentIndex, currentIndex + 8);
};
