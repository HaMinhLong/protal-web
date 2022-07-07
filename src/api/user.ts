import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListUser = (params) =>
  axiosServices.get(
    `${process.env.REACT_APP_SERVER}/user?${stringify(params)}`
  );

const getOneUser = (id) =>
  axiosServices.get(`${process.env.REACT_APP_SERVER}/user/${id}`);

const createUser = (params) =>
  axiosServices.post(`${process.env.REACT_APP_SERVER}/user`, params);

const updateUser = (id, params) =>
  axiosServices.put(`${process.env.REACT_APP_SERVER}/user/${id}`, params);

const updateStatusUser = (id, params) =>
  axiosServices.put(
    `${process.env.REACT_APP_SERVER}/user/updateStatus/${id}`,
    params
  );

const deleteUser = (id) =>
  axiosServices.delete(`${process.env.REACT_APP_SERVER}/user/${id}`);

export {
  getListUser,
  getOneUser,
  createUser,
  updateUser,
  updateStatusUser,
  deleteUser,
};
