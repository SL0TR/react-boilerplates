import { takeLatest, put, call } from 'redux-saga/effects';
import { Auth } from 'api';
import { message } from 'antd';
import { login, loginRequest } from './reducer';

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
