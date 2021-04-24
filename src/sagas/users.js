import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { users as ActionTypes } from '@constants/action-types';
import { fetchRequest, fetchSuccess, fetchFailure } from '@actions/users';

// Mock api
export const users = () => axios.get('/5b0756712f00002c00c6208c');

export function* fetchUsers() {
  try {
    yield put(fetchRequest());
    const request = yield call(users);
    yield put(fetchSuccess(request.data));
  } catch (e) {
    yield put(fetchFailure(e));
  }
}

export default function* watchUsers() {
  yield takeLatest(ActionTypes.FETCH, fetchUsers);
}
