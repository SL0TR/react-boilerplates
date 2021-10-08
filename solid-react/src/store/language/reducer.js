import { createSlice } from '@reduxjs/toolkit';
import config, { getCurrentLanguage } from './langConfig';

const initState = {
  language: getCurrentLanguage(config.defaultLanguage || 'english'),
};

const LangSwitchSlice = createSlice({
  name: 'langSwitcher',
  initialState: initState,
  reducers: {
    changeLanguage(state, action) {
      state.language = getCurrentLanguage(action.payload);
    },
  },
});

export const { changeLanguage } = LangSwitchSlice.actions;
export default LangSwitchSlice;
