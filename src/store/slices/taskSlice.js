import {createSlice, nanoid} from "@reduxjs/toolkit";
import initialState from "../taskInitialState";
import {priorityTypes, sortTypes} from "../../utils/constants";
import {editTag, removeTag} from "./tagsSlice";

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      prepare: (task) => {
        const { description, dateDue, priority, tags, isFeatured } = task;

        return {
          payload: {
            id: nanoid(),
            description,
            isComplete: false,
            priority: priority || priorityTypes.NO_PRIORITY,
            isFeatured: isFeatured || false,
            dateDue: dateDue || null,
            tags: tags || [],
          },
        };
      },

      reducer: (state, action) => {
        state.taskList.unshift(action.payload);
      },
    },

    editTask: (state, action) => {
      const { id } = action.payload;
      const taskIndex = state.taskList.findIndex((t) => t.id === id);

      state.taskList[taskIndex] = {
        ...state.taskList[taskIndex],
        ...action.payload,
      };
    },

    deleteTask: (state, action) => {
      const { id } = action.payload;
      state.taskList = [...state.taskList.filter((t) => t.id !== id)];
    },

    completeTask: (state, action) => {
      const { id } = action.payload;

      const task = state.taskList.find((t) => t.id === id);
      task.isComplete = !task.isComplete;
    },

    changeSortType: (state, action) => {
      const { sortValue } = action.payload;
      state.currentSortType = sortValue || sortTypes.DEFAULT;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeTag, (state, action) => {
        const { id } = action.payload;

        state.taskList.forEach((task) => {
          const tagIndex = task.tags.findIndex((tag) => tag.id === id);
          task.tags.splice(tagIndex, 1);
        });
      })

      .addCase(editTag, (state, action) => {
        const { id, newTitle } = action.payload;

        state.taskList.forEach((task) => {
          const tag = task.tags.find((tag) => tag.id === id);
          if (tag) {
            tag.title = newTitle;
          }
        });
      });
  },
});

export const { addTask, editTask, deleteTask, completeTask, changeSortType } =
  taskSlice.actions;

export default taskSlice.reducer;
