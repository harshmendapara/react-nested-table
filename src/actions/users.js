import { users as ActionTypes } from '@constants/action-types';

export const fetch = () => ({
  type: ActionTypes.FETCH,
});

export const fetchRequest = () => ({
  type: ActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = payload => ({
  type: ActionTypes.FETCH_SUCCESS,
  payload,
});

export const fetchFailure = exception => ({
  type: ActionTypes.FETCH_FAILURE,
  exception,
});

export const collapse = payload => ({
  type: ActionTypes.COLLAPSE,
  payload,
});

export const remove = payload => ({
  type: ActionTypes.REMOVE,
  payload,
});
