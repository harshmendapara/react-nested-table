import reducer, { initialState } from '@reducers/users';
import { fetchSuccess } from "@actions/users";
import FETCH_SUCCESS_received from '@mocks/reducers/FETCH_SUCCESS-received.json';
import FETCH_SUCCESS_expected from '@mocks/reducers/FETCH_SUCCESS-expected.json';

describe('Users Reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle the users/FETCH_SUCCESS action', () => {
    expect(reducer({}, fetchSuccess(FETCH_SUCCESS_received))).toEqual(FETCH_SUCCESS_expected);
  });
});
