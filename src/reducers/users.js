import { users as ActionTypes } from '@constants/action-types';
import makeNestedList from '@helpers/make-nested-list';
import recursiveRemove from '@helpers/recursive-remove';

export const initialState = {
  items: [],
  flatItems: [],
  isFetching: true,
  itemCount: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS: {
      return Object.assign({}, state, {
        ...state,
        items: makeNestedList(action.payload),
        flatItems: action.payload,
        isFetching: false,
        itemCount: action.payload.length,
      });
    }

    case ActionTypes.FETCH_FAILURE: {
      return Object.assign({}, state, {
        ...state,
        isFetching: false,
      });
    }

    case ActionTypes.COLLAPSE: {
      const newState = { ...state };
      const itemCollapsed = newState.flatItems[action.payload].collapsed;
      newState.flatItems[action.payload].collapsed = !itemCollapsed;
      return Object.assign({}, state, {
        ...newState,
        items: makeNestedList(newState.flatItems),
      });
    }

    case ActionTypes.REMOVE: {
      const newState = { ...state };
      newState.flatItems = recursiveRemove(newState.flatItems, action.payload);
      return Object.assign({}, state, {
        ...newState,
        items: makeNestedList(newState.flatItems),
        itemCount: newState.flatItems.filter(i => !i.removed).length,
      });
    }

    default:
      return state;
  }
}


export default reducer;
