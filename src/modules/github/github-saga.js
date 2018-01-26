import { takeEvery, put, call } from 'redux-saga/effects';

import {
  FETCH_GITHUB_USER_DATA,
  FETCH_GITHUB_USER_REPOS,
  fetchGithubUserReposAction
} from './github-actions';

import request from './github-api';

const apiMapping = {
  [FETCH_GITHUB_USER_DATA]: {
    apiCall: ({ payload: { username } }) =>
      request.get(`/users/${username}`).then(({ body }) => ({ body, username})),
    onSuccess: ({ username }) => [
      put(fetchGithubUserReposAction(username))
    ],
    onFailure: error => { console.log(error)}
  },
  [FETCH_GITHUB_USER_REPOS]: {
    apiCall: ({ payload: { username }}) =>
      request.get(`/users/${username}/repos`).then(({ body }) => body)
  }
};

function* handleApi(type, requestPayload) {
  const handler = apiMapping[type];

  try {
    const response = yield call(handler.apiCall, requestPayload);
    yield [
      put({
        type: `${type}_SUCCESS`,
        payload: response,
        requestPayload
      }),
      ...((handler.onSuccess && handler.onSuccess(response, requestPayload)) || [])
    ]
  } catch (error) {
    yield [
      put({
        type: `${type}_FAILURE`,
        error: error.message ? error.message : error,
        requestPayload
      }),
      ...((handler.onFailure && handler.onFailure(error, requestPayload)) || [])
    ];
  }
}

const apiMappingBinded = Object.keys(apiMapping).reduce((total, type) => {
  total[type] = handleApi.bind(null, type);
  return total;
}, {});

export default function*() {
  /*eslint guard-for-in: "off"*/
  for (const type in apiMapping) {
    yield takeEvery(type, apiMappingBinded[type]);
  }
}