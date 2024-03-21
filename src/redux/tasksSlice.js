import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchTasks, deleteTask, addTask } from "./tasksOps";
import { selectTextFilter } from "./filtersSlice";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteTask.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addTask.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export default slice.reducer;

export const selectLoading = (state) => state.tasks.loading;

export const selectError = (state) => state.tasks.error;

export const selectTasks = (state) => state.tasks.items;

// export const selectVisibleTasks = (state) => {
//   console.log("selectVisibleTasks");

//   const tasks = selectTasks(state);
//   const textFilter = selectTextFilter(state);

// return tasks.filter((task) =>
//   task.text.toLowerCase().includes(textFilter.toLowerCase())
// );
// };

export const selectVisibleTasks = createSelector(
  [selectTasks, selectTextFilter],
  (tasks, textFilter) => {
    console.log("selectVisibleTasks");
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);
