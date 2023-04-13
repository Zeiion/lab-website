import { get } from '.';

const PREFIX_URL = '/team';

export const getTeam = (id) => {
  return get(PREFIX_URL + `/${id}`);
};

export const getTeamList = () => {
  return get(PREFIX_URL + '/list');
};
