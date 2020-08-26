import { takeLatest, put } from 'redux-saga/effects';
// import { Auth } from 'api';
import { message } from 'antd';
import { login, loginRequest } from './reducer';

export function* loginSaga({ payload: { successText } }) {
  // const { data } = yield call(Auth.login, formData);

  // if (data?.key) {
  message.success(successText);
  yield put(login('dummyjwttoken'));
  // }
}

export default function* watchAuthActions() {
  yield takeLatest(loginRequest.toString(), loginSaga);
}
