import fetch from 'isomorphic-fetch';

export const fetchPopularRepos = (language = 'all') => {
  const encodedURI = encodedURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`,
  );

  return fetch(encodedURI)
    .then(data => data.json())
    .then(repos => repos.items)
    .catch(err => {
      console.warn(err);
      return null;
    });
};
