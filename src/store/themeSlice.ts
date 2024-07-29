import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialValue {
  theme: string
}
const initialValue: InitialValue = {theme: 'dark'};
export const themeSlice = createSlice({
  
  name: "themeSlice",
  initialState: initialValue,
  reducers: {
    setTheme: (state, action:PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});
export const { setTheme } = themeSlice.actions
