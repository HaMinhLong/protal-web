import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListMenuWebsite = (params) =>
  axiosServices.get(`menu?${stringify(params)}`);

const getOneMenuWebsite = (id) => axiosServices.get(`menu/${id}`);

const createMenuWebsite = (params) => axiosServices.post(`menu`, params);

const updateMenuWebsite = (id, params) =>
  axiosServices.put(`menu/${id}`, params);

const updateStatusMenuWebsite = (id, params) =>
  axiosServices.put(`menu/updateStatus/${id}`, params);

const deleteMenuWebsite = (id) => axiosServices.delete(`menu/${id}`);

export {
  getListMenuWebsite,
  getOneMenuWebsite,
  createMenuWebsite,
  updateMenuWebsite,
  updateStatusMenuWebsite,
  deleteMenuWebsite,
};
