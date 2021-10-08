import { createSlice } from '@reduxjs/toolkit';

const initState = {
  collapsed: false,
  openDrawer: false,
};

const AppSlice = createSlice({
  name: 'app',
  initialState: initState,
  reducers: {
    toggleCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    toggleOpenDrawer(state) {
      state.openDrawer = !state.openDrawer;
    },
  },
});

export const { toggleCollapsed, toggleOpenDrawer } = AppSlice.actions;

export default AppSlice;
