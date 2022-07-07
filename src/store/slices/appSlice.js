import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
    isSidebarShown: true,
  },
  reducers: {
    changeTheme: (state) => {
      state.isDark = !state.isDark;
    },

    setSidebarVisibility: (state, action) => {
      const { isSidebarShown } = action.payload;
      state.isSidebarShown = isSidebarShown;
    },
  },
});

export const { changeTheme, setSidebarVisibility } = appSlice.actions;

export default appSlice.reducer;
