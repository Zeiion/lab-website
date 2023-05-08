import { BASE_URL, DEFAULT_LIMIT } from '../consts';

const defaultParams = {
  limit: DEFAULT_LIMIT,
  sortBy: '_searchWeight:desc',
};

export const get = (url, params = defaultParams) => {
  const newParams = { ...defaultParams, ...params };
  const query = Object.keys(newParams)
    .map((key) => `${key}=${newParams[key]}`)
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
