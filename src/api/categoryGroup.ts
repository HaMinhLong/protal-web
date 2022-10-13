import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListCategoryGroup = (params) =>
  axiosServices.get(`categoryGroup?${stringify(params)}`);

const getOneCategoryGroup = (id) => axiosServices.get(`categoryGroup/${id}`);

const createCategoryGroup = (params) =>
  axiosServices.post(`categoryGroup`, params);

const updateCategoryGroup = (id, params) =>
  axiosServices.put(`categoryGroup/${id}`, params);

const updateStatusCategoryGroup = (id, params) =>
  axiosServices.put(`categoryGroup/updateStatus/${id}`, params);

const deleteCategoryGroup = (id) => axiosServices.delete(`categoryGroup/${id}`);

export {
  getListCategoryGroup,
  getOneCategoryGroup,
  createCategoryGroup,
  updateCategoryGroup,
  updateStatusCategoryGroup,
  deleteCategoryGroup,
};
