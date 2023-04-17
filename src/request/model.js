import { get } from '.';

const PREFIX_URL = '/model';

export const getModel = (id) => {
  return get(PREFIX_URL + `/${id}`);
};

export const getModelList = () => {
  return get(PREFIX_URL + '/list');
};
