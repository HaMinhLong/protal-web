import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListCollection = (params) =>
  axiosServices.get(`collection?${stringify(params)}`);

const getOneCollection = (id) => axiosServices.get(`collection/${id}`);

const createCollection = (params) => axiosServices.post(`collection`, params);

const updateCollection = (id, params) =>
  axiosServices.put(`collection/${id}`, params);

const updateStatusCollection = (id, params) =>
  axiosServices.put(`collection/updateStatus/${id}`, params);

const deleteCollection = (id) => axiosServices.delete(`collection/${id}`);

export {
  getListCollection,
  getOneCollection,
  createCollection,
  updateCollection,
  updateStatusCollection,
  deleteCollection,
};
