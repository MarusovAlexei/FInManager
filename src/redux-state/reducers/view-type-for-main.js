import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewType: "доход",
  value: "",
  comment: "",
};

export const viewTypeMainReducer = createSlice({
  name: "viwTypeMain",
  initialState,
  reducers: {
    changeViewType: (state, action) => {
      state.viewType = action.payload;
    },
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    changeComment: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export const { changeViewType, changeComment, changeValue } =
  viewTypeMainReducer.actions;

export default viewTypeMainReducer.reducer;
