import {
  PayloadAction,
  createSlice,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import {
  ListProfessorSchedule,
  ProfessorScheduleType,
  ScheduleArrayInterface,
  ScheduleType,
} from "../API/apiInterface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDayOfWeek } from "../utils/getDayOfWeek";

interface InitialValue {
  schedule: ScheduleArrayInterface;
  professorSchedule: ListProfessorSchedule[];
  professorScheduleLoading: boolean;
  scheduleLoading: boolean;
}
const initialValue: InitialValue = {
  schedule: [],
  professorSchedule: [],
  professorScheduleLoading: false,
  scheduleLoading: false,
};

export const scheduleSlice = createSlice({
  name: "scheduleSlice",
  initialState: initialValue,
  reducers: {
    setSchedule: (state, action: PayloadAction<ScheduleArrayInterface>) => {
      state.schedule = action.payload;
    },
    setProfessorSchedule: (
      state,
      action: PayloadAction<ListProfessorSchedule[]>,
    ) => {
      state.professorSchedule = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getSchedule.fulfilled, (state, payload) => {
      (state.schedule = payload.payload), (state.scheduleLoading = false);
    }),
      builder.addCase(getSchedule.pending, (state) => {
        state.scheduleLoading = true;
      }),
      builder.addCase(getSchedule.rejected, (state) => {
        state.scheduleLoading = false;
      }),
      builder.addCase(getProfessorSchedule.fulfilled, (state, payload) => {
        state.professorSchedule = payload.payload;
        state.professorScheduleLoading = false;
      }),
      builder.addCase(getProfessorSchedule.pending, (state) => {
        state.professorScheduleLoading = true;
      }),
      builder.addCase(getProfessorSchedule.rejected, (state) => {
        state.professorScheduleLoading = false;
      });
  },
});
export const { setSchedule } = scheduleSlice.actions;
export default scheduleSlice.reducer;

interface Payload {
  getState: () => {
    week: {
      week: string;
    };
  };
}
export const getSchedule = createAsyncThunk(
  "расписание",
  async (_: undefined, payload) => {
    try {
      const group = await AsyncStorage.getItem("group");
      const response = await fetch(
        `https://oh.sssh.it/schedule/${group}/${
          (payload as Payload).getState().week.week
        }`,
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
      return sortSchedule;
    } catch (e) {
      console.error("Ошибка при получении расписания:", e);
      return [];
    }
  },
);
export const getProfessorSchedule = createAsyncThunk(
  "расписание преподавателя",
  async (
    { professorKey, week }: { professorKey: string; week: string | number },
    thunkAPI,
  ) => {
    console.log(week);
    try {
      // const group = await AsyncStorage.getItem('group')
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
      return newProfessorSchedule;
    } catch (e) {
      console.error("Ошибка при получении расписания преподавателя:", e);
      return [];
    }
  },
);
