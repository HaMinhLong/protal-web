import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListProductComment = (params) =>
  axiosServices.get(`productComment?${stringify(params)}`);

const getOneProductComment = (id) => axiosServices.get(`productComment/${id}`);

const createProductComment = (params) =>
  axiosServices.post(`productComment`, params);

const updateProductComment = (id, params) =>
  axiosServices.put(`productComment/${id}`, params);

const updateStatusProductComment = (id, params) =>
  axiosServices.put(`productComment/updateStatus/${id}`, params);

const deleteProductComment = (id) =>
  axiosServices.delete(`productComment/${id}`);

export {
  getListProductComment,
  getOneProductComment,
  createProductComment,
  updateProductComment,
  updateStatusProductComment,
  deleteProductComment,
};
