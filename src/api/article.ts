import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListArticle = (params) =>
  axiosServices.get(`article?${stringify(params)}`);

const getOneArticle = (id) => axiosServices.get(`article/${id}`);

const createArticle = (params) => axiosServices.post(`article`, params);

const updateArticle = (id, params) =>
  axiosServices.put(`article/${id}`, params);

const updateStatusArticle = (id, params) =>
  axiosServices.put(`article/updateStatus/${id}`, params);

const deleteArticle = (id) => axiosServices.delete(`article/${id}`);

export {
  getListArticle,
  getOneArticle,
  createArticle,
  updateArticle,
  updateStatusArticle,
  deleteArticle,
};
