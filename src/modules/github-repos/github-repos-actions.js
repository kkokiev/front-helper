export const FETCH_GITHUB_USER_DATA = 'FETCH_GITHUB_USER_DATA';

export const fetchGithubUserDataAction = username => ({
  type: FETCH_GITHUB_USER_DATA,
  payload: { username }
});
