import { fork } from 'redux-saga/effects';
import watchUsers from './users';

export default function* rootSaga() {
  const watchers = [
    watchUsers,
  ];

  yield watchers.map(watcher => fork(watcher));
}
