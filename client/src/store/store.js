import { configureStore } from "@reduxjs/toolkit";
import operationSlice from "../features/operation/operationSlice";
import timerSlice from "../features/timer/timerSlice";

export default configureStore({
  reducer: {
    operation: operationSlice,
    timer: timerSlice,
  },
});
