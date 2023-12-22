import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    sec: 0,
    min: 0,
    hour: 0,
  },
  reducers: {
    incrementSec: (state) => {
      state.sec++;

      if (state.sec === 60) {
        state.sec = 0;
        state.min++;
      }
    },
    incrementMin: (state) => {
      state.min++;
      if (state.min === 60) {
        state.min = 0;
        state.hour++;
      }
    },
    incrementHour: (state) => {
      state.hour++;
    },
    resetTime: (state) => {
      state.sec = 0;
      state.min = 0;
      state.hour = 0;
    },
  },
});

export const { incrementSec, incrementMin, incrementHour, resetTime } =
  timerSlice.actions;
export const selectFormattedSec = (state) => {
  const sec = state.timer.sec;
  return sec < 10 ? `0${sec}` : `${sec}`;
};
export default timerSlice.reducer;
