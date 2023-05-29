import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    updateData: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;
