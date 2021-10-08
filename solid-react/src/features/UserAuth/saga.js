import { takeLatest, put, call } from 'redux-saga/effects';
import { login, loginRequest } from './reducer';
import { Auth } from './api';

export function* loginSaga({ payload }) {
  const { data } = yield call(Auth.test);
  console.log(payload);
  if (data) {
    yield put(login('dummyjwttoken'));
  }
}

export default function* watchAuthActions() {
  yield takeLatest(loginRequest.toString(), loginSaga);
}
