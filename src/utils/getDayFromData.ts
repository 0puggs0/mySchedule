import dayjs from "dayjs";
import { Day } from "../types/schedule";

export const getDayFromData = (day?: string) => {return dayjs(day).format('dd').replace(/^(.)/, (match) => match.toUpperCase()) as Day}