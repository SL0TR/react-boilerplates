import { combineReducers } from 'redux';
import { AuthSlice } from 'features/UserAuth';
import LangSwitchSlice from './language/reducer';
import AppSlice from './app/reducer';

export default combineReducers({
  Auth: AuthSlice.reducer,
  LanguageSwitcher: LangSwitchSlice.reducer,
  App: AppSlice.reducer,
});
