import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    text: "",
    a: "",
  },
  reducers: {
    changeTextFilter(state, action) {
      state.text = action.payload;
    },
  },
});

export const { changeTextFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

export const selectTextFilter = (state) => state.filters.text;
