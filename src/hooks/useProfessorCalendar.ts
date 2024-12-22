import { useState } from "react";
import { getWeeksSince } from "../utils/getWeekSince";
import dayjs from "dayjs";
import { DateData } from "react-native-calendars";

const useProfessorCalendar = () => {
  const [localWeek, setLocalWeek] = useState(getWeeksSince(dayjs().toString()));
  const [selectedDate, setSelectedDate] = useState("");
  function onDayPress(day: DateData) {
    const dayOfWeek = dayjs(day.dateString).day();
    if (dayOfWeek !== 0) {
      setSelectedDate(day.dateString);
      setLocalWeek(getWeeksSince(day.dateString));
    }
  }
  return { localWeek, selectedDate, onDayPress };
};
export default useProfessorCalendar;
