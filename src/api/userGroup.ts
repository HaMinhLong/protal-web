import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListUserGroup = (params) =>
  axiosServices.get(
    `${process.env.REACT_APP_SERVER}/userGroup?${stringify(params)}`
  );

const getOneUserGroup = (id) =>
  axiosServices.get(`${process.env.REACT_APP_SERVER}/userGroup/${id}`);

const createUserGroup = (params) =>
  axiosServices.post(`${process.env.REACT_APP_SERVER}/userGroup`, params);

const updateUserGroup = (id, params) =>
  axiosServices.put(`${process.env.REACT_APP_SERVER}/userGroup/${id}`, params);

const updateStatusUserGroup = (id, params) =>
  axiosServices.put(
    `${process.env.REACT_APP_SERVER}/userGroup/updateStatus/${id}`,
    params
  );

const deleteUserGroup = (id) =>
  axiosServices.delete(`${process.env.REACT_APP_SERVER}/userGroup/${id}`);

export {
  getListUserGroup,
  getOneUserGroup,
  createUserGroup,
  updateUserGroup,
  updateStatusUserGroup,
  deleteUserGroup,
};
