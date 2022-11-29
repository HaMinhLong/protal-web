import axiosServices from 'utils/axios';
import { stringify } from 'qs';

const getListWebsiteUser = (params) => axiosServices.get(`website-user?${stringify(params)}`);

const updateWebsiteUser = (id, params) => axiosServices.put(`website-user/${id}`, params);

export { getListWebsiteUser, updateWebsiteUser };
