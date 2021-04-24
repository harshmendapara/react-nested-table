import { put, call, takeLatest } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import watchUsers, { fetchUsers, users } from '@sagas/users';
import { fetchRequest, fetchSuccess, fetchFailure } from '@actions/users';
import { users as ActionTypes } from '@constants/action-types';

describe('Users Saga', () => {
  test('should take the latest users/FETCH action', () => {
    const watchUsersClone = cloneableGenerator(watchUsers)();

    expect(watchUsersClone.next().value).toEqual(takeLatest(ActionTypes.FETCH, fetchUsers));
  });

  test('should fetch the users with success', () => {
    const fetchUsersClone = cloneableGenerator(fetchUsers)();

    expect(fetchUsersClone.next().value).toEqual(put(fetchRequest()));
    expect(fetchUsersClone.next().value).toEqual(call(users));
    expect(fetchUsersClone.next({ data: {} }).value).toEqual(put(fetchSuccess({})));
  });

  test('should fetch the users with failure', () => {
    const fetchUsersClone = cloneableGenerator(fetchUsers)();

    expect(fetchUsersClone.next().value).toEqual(put(fetchRequest()));
    expect(fetchUsersClone.next().value).toEqual(call(users));
    expect(fetchUsersClone.next().value).toEqual(put(fetchFailure(new TypeError("Cannot read property 'data' of undefined"))));
  });

});
