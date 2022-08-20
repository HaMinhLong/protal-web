import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListUserGroup = (params) =>
  axiosServices.get(`userGroup?${stringify(params)}`);

const getOneUserGroup = (id) => axiosServices.get(`userGroup/${id}`);

const createUserGroup = (params) => axiosServices.post(`userGroup`, params);

const updateUserGroup = (id, params) =>
  axiosServices.put(`userGroup/${id}`, params);

const updateStatusUserGroup = (id, params) =>
  axiosServices.put(`userGroup/updateStatus/${id}`, params);

const deleteUserGroup = (id) => axiosServices.delete(`userGroup/${id}`);

export {
  getListUserGroup,
  getOneUserGroup,
  createUserGroup,
  updateUserGroup,
  updateStatusUserGroup,
  deleteUserGroup,
};
