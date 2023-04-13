import { BASE_URL, DEFAULT_LIMIT } from '../consts';

export const get = (
  url,
  params = {
    limit: DEFAULT_LIMIT,
  },
) => {
  const query = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  return fetch(BASE_URL + url + '?' + query, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const post = (url, body) => {
  return fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};
