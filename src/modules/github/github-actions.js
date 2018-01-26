export const FETCH_GITHUB_USER_DATA = 'FETCH_GITHUB_USER_DATA';
export const FETCH_GITHUB_USER_REPOS = 'FETCH_GITHUB_USER_REPOS';

export const fetchGithubUserDataAction = username => ({
  type: FETCH_GITHUB_USER_DATA,
  payload: { username }
});

export const fetchGithubUserReposAction = username => ({
  type: FETCH_GITHUB_USER_REPOS,
  payload: { username }
});
