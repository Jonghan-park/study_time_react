import { configureStore } from "@reduxjs/toolkit";
import operationSlice from "../features/operation/operationSlice";
import timerSlice from "../features/timer/timerSlice";
import userSlice from "../features/user/userSlice";

export default configureStore({
  reducer: {
    operation: operationSlice,
    timer: timerSlice,
    user: userSlice,
  },
});
