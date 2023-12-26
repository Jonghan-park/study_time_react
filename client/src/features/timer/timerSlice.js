import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    sec: `00`,
    min: `00`,
    hour: 0,
  },
  reducers: {
    incrementSec: (state) => {
      state.sec++;

      if (state.sec === 60) {
        state.sec = 0;
        state.min++;
      } else if (state.sec < 10) {
        state.sec = `0${state.sec}`;
      }
    },
    incrementMin: (state) => {
      state.min++;

      if (state.min === 60) {
        state.min = 0;
        state.hour++;
      } else if (state.min < 10) {
        state.min = `0${state.min}`;
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
export default timerSlice.reducer;
