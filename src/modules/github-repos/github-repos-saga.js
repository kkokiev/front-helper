import { takeEvery } from 'redux-saga';
// import { put, select, take, call } from 'redux-saga/effects';

import {
  FETCH_GITHUB_USER_DATA
} from './github-repos-actions';

import * as api from './github-repos-api';

function* fetchGithubUserData(action) {
  const { username } = action.payload;

  const user = yield api.fetchGithubUserData(username);
  // console.log(user);
}

export default function* () {
  yield takeEvery(FETCH_GITHUB_USER_DATA, fetchGithubUserData);
}
