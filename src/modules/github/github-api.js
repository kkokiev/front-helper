import superagent from 'superagent';

const apiUrl = 'https://api.github.com';

// export const fetchGithubUserRepos = (username, page = 1, per_page = 30) =>
//   superagent
//     .get(`${apiUrl}/users/${username}/repos`)
//     .query({ page, per_page })
//     .then(res => res.body);

const request = ['get', 'post', 'put', 'delete'].reduce((result, method) => {
  /* eslint no-param-reassign: "off" */
  result[method] = url => superagent[method](apiUrl + url);
  return result;
}, {});

export default request;
