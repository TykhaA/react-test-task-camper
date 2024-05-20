import { instance } from './api';

export const getCamperListApi = async (limit, params) => {
  const { data } = await instance.get(`api/camper?page=1&limit=${limit}`, {
    params: params,
  });
  return data;
};

export const getCamperDeatailApi = async value => {
  const { data } = await instance.get(`api/camper/${value}`);
  return data;
};
