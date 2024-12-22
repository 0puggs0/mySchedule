import { makeAutoObservable } from "mobx";
import { getWeeksSince } from "../utils/getWeekSince";
import dayjs from "dayjs";
import { getDayFromData } from "../utils/getDayFromData";
import "dayjs/locale/ru";
dayjs.locale("ru");

class DateStore {
  week: number = getWeeksSince(dayjs().format("YYYY-MM-DD"));
  date = dayjs().toString();
  day = getDayFromData();
  constructor() {
    makeAutoObservable(this);
  }
  setWeek = (value: number) => {
    this.week = value;
  };
  setDate = (value: typeof this.date) => {
    this.date = value;
  };
  setDay = (value: typeof this.day) => {
    this.day = value;
  };
}
export default new DateStore();
