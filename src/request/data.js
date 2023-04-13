import { get } from '.';

const PREFIX_URL = '/data';

export const getData = (id) => {
  return get(PREFIX_URL + `/${id}`);
};

export const getDataList = () => {
  return get(PREFIX_URL + '/list');
};
