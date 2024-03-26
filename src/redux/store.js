import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/slice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
