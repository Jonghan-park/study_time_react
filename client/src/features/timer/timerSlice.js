import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
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
    },
    saveTimer: (state) => {
      state.isOn = false;
    },
  },
});

export const { startTimer, stopTimer, resetTimer, saveTimer } =
  timerSlice.actions;
export default timerSlice.reducer;
