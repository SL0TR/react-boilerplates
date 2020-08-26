import { takeLatest, put } from 'redux-saga/effects';
// import { Auth } from 'api';
import { message } from 'antd';
import { login, loginRequest } from './reducer';

export function* loginSaga() {
  // const { data } = yield call(Auth.login, payload);

  // if (data?.key) {
  console.log('called!');
  message.success('Successfully logged in!');
  yield put(login('dummyjwttoken'));
  // }
}

export default function* watchAuthActions() {
  yield takeLatest(loginRequest.toString(), loginSaga);
}
