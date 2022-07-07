import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "important",
  },
  {
    id: "2",
    title: "warning",
  },
  {
    id: "3",
    title: "project-name",
  },
];

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag: (state, action) => {
      const { id, title } = action.payload;
      state.push({ id, title });
    },
    editTag: (state, action) => {
      const { id, newTitle } = action.payload;
      state.find((tag) => tag.id === id).title = newTitle;
    },
    removeTag: (state, action) => {
      const { id } = action.payload;
      return state.filter((tag) => tag.id !== id);
    },
  },
});

export const { addTag, editTag, removeTag } = tagsSlice.actions;

export default tagsSlice.reducer;
