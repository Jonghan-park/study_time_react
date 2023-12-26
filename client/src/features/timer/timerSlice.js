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
        state.sec = `00`;

        // Increement min
        state.min++;
        if (state.min === 60) {
          state.min = 0;
          state.hour++;
        } else if (state.min < 10) {
          state.min = `0${state.min}`;

          // Increement hour
        } else if (state.min === 60) {
          state.min = `00`;
          state.hour++;
        }
      } else if (state.sec < 10) {
        state.sec = `0${state.sec}`;
      }
    },
    resetTime: (state) => {
      state.sec = `00`;
      state.min = `00`;
      state.hour = 0;
    },
  },
});

export const { incrementSec, resetTime } = timerSlice.actions;
export default timerSlice.reducer;
