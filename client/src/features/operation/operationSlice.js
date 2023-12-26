import { createSlice } from "@reduxjs/toolkit";

const operationSlice = createSlice({
  name: "operation",
  initialState: {
    isOn: false,
  },
  reducers: {
    startTimer: (state) => {
      state.isOn = true;
    },
    stopTimer: (state) => {
      state.isOn = false;
    },
    resetTimer: (state) => {
      state.isOn = false;
      //
    },
    saveTimer: (state) => {
      state.isOn = false;
    },
  },
});

export const { startTimer, stopTimer, resetTimer, saveTimer } =
  operationSlice.actions;
export default operationSlice.reducer;
