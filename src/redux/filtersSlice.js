import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;

const filterSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, action) {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filtersSliceReducer = filterSlice.reducer;
