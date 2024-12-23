import { makeAutoObservable, runInAction } from "mobx";
import {
  ListProfessorSchedule,
  ProfessorScheduleType,
  ScheduleArrayInterface,
  ScheduleType,
} from "../API/apiInterface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDayOfWeek } from "../utils/getDayOfWeek";
import dateStore from "./dateStore";

class ScheduleStore {
  schedule: ScheduleArrayInterface = [];
  scheduleIsLoading = false;
  professorSchedule: ListProfessorSchedule[] = [];
  professorScheduleIsLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  getSchedule = async () => {
    this.scheduleIsLoading = true;
    try {
      const group = await AsyncStorage.getItem("group");
      const response = await fetch(
        `https://oh.sssh.it/schedule/${group}/${dateStore.week}`,
      );
      const schedule: ScheduleType = await response.json();

      const sortSchedule: ScheduleArrayInterface = [[], [], [], [], [], []];
      schedule.schedule.sort((a, b) => {
        if (a.timeStart > b.timeStart) {
          return 1;
        }
        if (a.timeStart < b.timeStart) {
          return -1;
        }
        return 0;
      });
      schedule.schedule.forEach((item) => {
        switch (getDayOfWeek(item.date)) {
          case "Понедельник":
            sortSchedule[0].push(item);
            break;
          case "Вторник":
            sortSchedule[1].push(item);
            break;
          case "Среда":
            sortSchedule[2].push(item);
            break;
          case "Четверг":
            sortSchedule[3].push(item);
            break;
          case "Пятница":
            sortSchedule[4].push(item);
            break;
          case "Суббота":
            sortSchedule[5].push(item);
            break;
          default:
            "";
        }
      });
      runInAction(() => {
        this.schedule = sortSchedule;
        this.scheduleIsLoading = false;
      });
    } catch (e) {
      console.error("Ошибка при получении расписания:", e);
      runInAction(() => {
        this.schedule = [];
        this.scheduleIsLoading = false;
      });
    }
  };
  getProfessorSchedule = async ({
    professorKey,
    week,
  }: {
    professorKey: string;
    week: string | number;
  }) => {
    this.professorScheduleIsLoading = true;
    try {
      const response = await fetch(
        `https://oh.sssh.it/professorSchedule/${professorKey}/${week}`,
      );
      const professorSchedule: ProfessorScheduleType = await response.json();
      professorSchedule.professors.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      });
      const newProfessorSchedule: ListProfessorSchedule[] = [
        { title: "Понедельник", data: [] },
        { title: "Вторник", data: [] },
        { title: "Среда", data: [] },
        { title: "Четверг", data: [] },
        { title: "Пятница", data: [] },
        { title: "Суббота", data: [] },
      ];
      professorSchedule.professors.forEach((item) => {
        switch (getDayOfWeek(item.date)) {
          case "Понедельник":
            newProfessorSchedule[0].data.push(item);
            break;
          case "Вторник":
            newProfessorSchedule[1].data.push(item);
            break;
          case "Среда":
            newProfessorSchedule[2].data.push(item);
            break;
          case "Четверг":
            newProfessorSchedule[3].data.push(item);
            break;
          case "Пятница":
            newProfessorSchedule[4].data.push(item);
            break;
          case "Суббота":
            newProfessorSchedule[5].data.push(item);
            break;
        }
      });
      newProfessorSchedule.forEach((item) => {
        item.data.sort((a, b) => {
          if (a.timeStart > b.timeStart) {
            return 1;
          }
          if (a.timeStart < b.timeStart) {
            return -1;
          }
          return 0;
        });
      });
      runInAction(() => {
        this.professorSchedule = newProfessorSchedule;
        this.professorScheduleIsLoading = false;
      });
    } catch (e) {
      console.error("Ошибка при получении расписания преподавателя:", e);
      runInAction(() => {
        this.professorSchedule = [];
        this.professorScheduleIsLoading = false;
      });
    }
  };
}

export default new ScheduleStore();
