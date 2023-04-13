import { get } from '.';

const PREFIX_URL = '/achieve';

export const getAchieve = (id) => {
  return get(PREFIX_URL + `/${id}`);
};

export const getAchieveList = () => {
  return get(PREFIX_URL + '/list');
};
