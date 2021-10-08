import { takeLatest, put, call } from 'redux-saga/effects';
import { message } from 'antd';
import { login, loginRequest } from './reducer';
import { Auth } from './api';

export function* loginSaga({ payload: { successText } }) {
  const { data } = yield call(Auth.test);

  if (data) {
    message.success(successText);
    yield put(login('dummyjwttoken'));
  }
}

export default function* watchAuthActions() {
  yield takeLatest(loginRequest.toString(), loginSaga);
}
