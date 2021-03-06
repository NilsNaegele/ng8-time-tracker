import { format, isSameDay } from 'date-fns';

const getZeroPaddingTime = (time: number): string => {
  const paddedTime = time < 10 ? '0' + time : '' + time;
  return paddedTime.indexOf('.') === -1 ? paddedTime : paddedTime.substr(0, paddedTime.indexOf('.'));
};

const canCalculateElapsedTime = (startTime: number, endTime: number): boolean => {
  const areValid = startTime !== 0 && endTime !== 0;
  const areInOrder = startTime <= endTime;
  return areValid && areInOrder;
};

export const formatTime = (timeInSeconds: number): string => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
  const seconds = timeInSeconds - (hours * 3600) - (minutes * 60);

  return getZeroPaddingTime(hours) + ':' + getZeroPaddingTime(minutes) + ':' + getZeroPaddingTime(seconds);
};

export const getElapsedTimeInSeconds = (startTime: number, endTime: number) => Math.floor((endTime - startTime) / 1000);



export const formatDate = (date: Date): string => {
  return format(date, 'dd/MM/yyyy');
};

export const isInDateRange = (dateToCheck: Date, dateRange: Date[]): boolean => {
  return dateRange.some(date => isSameDay(date, dateToCheck));
};

export const formatElapsedTime = (startTimeMS: number, endTimeMS: number, inactiveValue = '00:00:00'): string => {
  const elapsedTime = getElapsedTimeInSeconds(startTimeMS, endTimeMS);
  return elapsedTime >= 0 && canCalculateElapsedTime(startTimeMS, endTimeMS) ? formatTime(elapsedTime) : inactiveValue;
};


