import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListCategory = (params) =>
  axiosServices.get(`category?${stringify(params)}`);

const getOneCategory = (id) => axiosServices.get(`category/${id}`);

const createCategory = (params) => axiosServices.post(`category`, params);

const updateCategory = (id, params) =>
  axiosServices.put(`category/${id}`, params);

const updateStatusCategory = (id, params) =>
  axiosServices.put(`category/updateStatus/${id}`, params);

const deleteCategory = (id) => axiosServices.delete(`category/${id}`);

export {
  getListCategory,
  getOneCategory,
  createCategory,
  updateCategory,
  updateStatusCategory,
  deleteCategory,
};
