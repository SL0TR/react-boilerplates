import { all } from 'redux-saga/effects';
import { AuthSaga } from 'features/UserAuth';

export default function* rootSaga() {
  yield all([AuthSaga()]);
}
