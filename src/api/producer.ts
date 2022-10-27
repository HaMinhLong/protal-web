import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListProducer = (params) =>
  axiosServices.get(`producer?${stringify(params)}`);

const getOneProducer = (id) => axiosServices.get(`producer/${id}`);

const createProducer = (params) => axiosServices.post(`producer`, params);

const updateProducer = (id, params) =>
  axiosServices.put(`producer/${id}`, params);

const updateStatusProducer = (id, params) =>
  axiosServices.put(`producer/updateStatus/${id}`, params);

const deleteProducer = (id) => axiosServices.delete(`producer/${id}`);

export {
  getListProducer,
  getOneProducer,
  createProducer,
  updateProducer,
  updateStatusProducer,
  deleteProducer,
};
