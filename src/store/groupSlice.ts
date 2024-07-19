import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const groupSlice = createSlice({
  name: "groupSlice",
  initialState: {
    value: "",
  },
  reducers: {
    setGroup: (state, action: PayloadAction<string>) => {
         state.value = action.payload
    },
  },
});
export const { setGroup } = groupSlice.actions;
export default groupSlice.reducer;
