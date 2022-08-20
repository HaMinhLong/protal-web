import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListWebsiteGroup = (params) =>
  axiosServices.get(`websiteGroup?${stringify(params)}`);

const getOneWebsiteGroup = (id) => axiosServices.get(`websiteGroup/${id}`);

const createWebsiteGroup = (params) =>
  axiosServices.post(`websiteGroup`, params);

const updateWebsiteGroup = (id, params) =>
  axiosServices.put(`websiteGroup/${id}`, params);

const updateStatusWebsiteGroup = (id, params) =>
  axiosServices.put(`websiteGroup/updateStatus/${id}`, params);

const deleteWebsiteGroup = (id) => axiosServices.delete(`websiteGroup/${id}`);

export {
  getListWebsiteGroup,
  getOneWebsiteGroup,
  createWebsiteGroup,
  updateWebsiteGroup,
  updateStatusWebsiteGroup,
  deleteWebsiteGroup,
};
