import { combineReducers } from 'redux';
import { AuthSlice } from 'features/UserAuth';

export default combineReducers({
  Auth: AuthSlice.reducer,
});
