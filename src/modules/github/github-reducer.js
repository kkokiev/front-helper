import { combineReducers } from 'redux';

import {
  FETCH_GITHUB_USER_DATA,
  FETCH_GITHUB_USER_REPOS
} from './github-actions';

const githubUser = (state = {}, action) => {
  switch (action.type) {
    case `${FETCH_GITHUB_USER_DATA}_SUCCESS` : {
      console.log(action);
      const { name, public_repos } = action.payload.body;
      return {
        name,
        public_repos
      };
    }
    default: {
      return state;
    }
  }
};

const githubUserRepos = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_GITHUB_USER_REPOS}_SUCCESS`: {
      console.log(action.payload);
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({ githubUser, githubUserRepos });
