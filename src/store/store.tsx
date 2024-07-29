import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { weekSlice } from "./weekSlice";
import { groupSlice } from "./groupSlice";
import scheduleSlice from "./scheduleSlice";
import { themeSlice } from "./themeSlice";

const rootReducer = combineReducers({
  week: weekSlice.reducer,
  group: groupSlice.reducer,
  schedule: scheduleSlice,
  theme: themeSlice.reducer
}); 

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];
