import dayjs from "dayjs";

export function getWeeksSince(date: string): number {
    // Преобразуем строки дат в объекты Dayjs
    const start = dayjs("2020-01-06");
    const end = dayjs(date);
    const daysDiff = end.diff(start, "day");
    const weeksDiff = Math.floor(daysDiff / 7);
  
    return weeksDiff + 1;
  }