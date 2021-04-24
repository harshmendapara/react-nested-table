import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

let store;
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const createRedux = (initialState) => {
  store = createStore(reducers, initialState, middleware);
  sagaMiddleware.run(sagas);
  return store;
};

export default createRedux;
