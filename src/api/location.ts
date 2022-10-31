import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListLocation = (params) =>
  axiosServices.get(`location?${stringify(params)}`);

const getOneLocation = (id) => axiosServices.get(`location/${id}`);

const createLocation = (params) => axiosServices.post(`location`, params);

const updateLocation = (id, params) =>
  axiosServices.put(`location/${id}`, params);

const updateStatusLocation = (id, params) =>
  axiosServices.put(`location/updateStatus/${id}`, params);

const deleteLocation = (id) => axiosServices.delete(`location/${id}`);

export {
  getListLocation,
  getOneLocation,
  createLocation,
  updateLocation,
  updateStatusLocation,
  deleteLocation,
};
