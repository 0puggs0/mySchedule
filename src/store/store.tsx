import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { weekSlice } from "./weekSlice";
import { groupSlice } from "./groupSlice";
import scheduleSlice from "./scheduleSlice";

const rootReducer = combineReducers({
  week: weekSlice.reducer,
  group: groupSlice.reducer,
  schedule: scheduleSlice
}); 

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];
