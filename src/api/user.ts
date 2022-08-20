import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListUser = (params) => axiosServices.get(`user?${stringify(params)}`);

const getOneUser = (id) => axiosServices.get(`user/${id}`);

const createUser = (params) => axiosServices.post(`user`, params);

const updateUser = (id, params) => axiosServices.put(`user/${id}`, params);

const updateStatusUser = (id, params) =>
  axiosServices.put(`user/updateStatus/${id}`, params);

const deleteUser = (id) => axiosServices.delete(`user/${id}`);

export {
  getListUser,
  getOneUser,
  createUser,
  updateUser,
  updateStatusUser,
  deleteUser,
};
