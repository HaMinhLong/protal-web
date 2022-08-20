import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListWebsite = (params) =>
  axiosServices.get(`website?${stringify(params)}`);

const getOneWebsite = (id) => axiosServices.get(`website/${id}`);

const createWebsite = (params) =>
  axiosServices.post(`website`, params, {
    headers: { "Content-Type": "multipart/form-data" },
  });

const updateWebsite = (id, params) =>
  axiosServices.put(`website/${id}`, params, {
    headers: { "Content-Type": "multipart/form-data" },
  });

const updateStatusWebsite = (id, params) =>
  axiosServices.put(`website/updateStatus/${id}`, params);

const deleteWebsite = (id) => axiosServices.delete(`website/${id}`);

export {
  getListWebsite,
  getOneWebsite,
  createWebsite,
  updateWebsite,
  updateStatusWebsite,
  deleteWebsite,
};
