import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getWeeksSince } from "../utils/getWeekSince";
import dayjs from "dayjs";
import "dayjs/locale/ru";
dayjs.locale('ru')

const initialValue = { week: getWeeksSince(dayjs().format("YYYY-MM-DD")), date: dayjs().toString(), day: dayjs().format('dd').replace(/^(.)/, (match) => match.toUpperCase())};
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
    setDay: (state, action:PayloadAction<string>) => {
      state.day = action.payload;
    },
  },
});
export const {setWeek, setDate, setDay} = weekSlice.actions
