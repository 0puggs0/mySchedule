import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getWeeksSince } from "../utils/getWeekSince";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { Day } from "../types/schedule";
import { getDayFromData } from "../utils/getDayFromData";
dayjs.locale('ru')
interface InitialValue {
  day: Day,
  week: number,
  date: string
}
const initialValue: InitialValue = { week: getWeeksSince(dayjs().format("YYYY-MM-DD")), date: dayjs().toString(), day: getDayFromData()};
export const weekSlice = createSlice({
  
  name: "weekSlice",
  initialState: initialValue,
  reducers: {
    setWeek: (state, action:PayloadAction<number>) => {
      state.week = action.payload;
    },
    setDate: (state, action:PayloadAction<string>) => {
      state.date = action.payload;
    },
    setDay: (state, action:PayloadAction<Day>) => {
      state.day = action.payload;
    },
  },
});
export const {setWeek, setDate, setDay} = weekSlice.actions
