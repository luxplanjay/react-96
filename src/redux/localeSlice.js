import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "locale",
  initialState: {
    lang: "uk",
    updatedAt: Date.now(),
  },
  reducers: {
    changeLang: {
      reducer: (state, action) => {
        state.lang = action.payload.value;
        state.updatedAt = action.payload.time;
      },
      prepare: (value) => {
        return {
          payload: {
            value,
            time: Date.now(),
          },
        };
      },
    },
  },
});

export const { changeLang } = slice.actions;

export default slice.reducer;

export const selectLang = (state) => state.locale.lang;

export const selectUpdated = (state) => state.locale.updatedAt;
