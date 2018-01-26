import superagent from 'superagent';

const apiUrl = 'https://api.github.com';

export const fetchGithubUserData = username =>
  superagent
    .get(`${apiUrl}/users/${username}/repos`).then(res => res.body);
