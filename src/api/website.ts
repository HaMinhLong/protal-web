import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListWebsite = (params) =>
  axiosServices.get(
    `${process.env.REACT_APP_SERVER}/website?${stringify(params)}`
  );

const getOneWebsite = (id) =>
  axiosServices.get(`${process.env.REACT_APP_SERVER}/website/${id}`);

const createWebsite = (params) =>
  axiosServices.post(`${process.env.REACT_APP_SERVER}/website`, params, {
    headers: { "Content-Type": "multipart/form-data" },
  });

const updateWebsite = (id, params) =>
  axiosServices.put(`${process.env.REACT_APP_SERVER}/website/${id}`, params, {
    headers: { "Content-Type": "multipart/form-data" },
  });

const updateStatusWebsite = (id, params) =>
  axiosServices.put(
    `${process.env.REACT_APP_SERVER}/website/updateStatus/${id}`,
    params
  );

const deleteWebsite = (id) =>
  axiosServices.delete(`${process.env.REACT_APP_SERVER}/website/${id}`);

export {
  getListWebsite,
  getOneWebsite,
  createWebsite,
  updateWebsite,
  updateStatusWebsite,
  deleteWebsite,
};
