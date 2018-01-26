import { fork } from 'redux-saga/effects';

import githubReposSaga from './github-repos/github-repos-saga';

export const sagas = [
  githubReposSaga
];

export default function* rootSaga() {
  for (const saga of sagas) {
    yield fork(saga);
  }
}
