import { configureStore } from "@reduxjs/toolkit";
import operationSlice from "../features/operation/operationSlice";
import timerSlice from "../features/timer/timerSlice";
import userSlice from "../features/user/userSlice";
import modalSlice from "../features/modal/modalSlice";

export default configureStore({
  reducer: {
    operation: operationSlice,
    timer: timerSlice,
    user: userSlice,
    modal: modalSlice,
  },
});
