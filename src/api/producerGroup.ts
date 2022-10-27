import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListProducerGroup = (params) =>
  axiosServices.get(`producerGroup?${stringify(params)}`);

const getOneProducerGroup = (id) => axiosServices.get(`producerGroup/${id}`);

const createProducerGroup = (params) =>
  axiosServices.post(`producerGroup`, params);

const updateProducerGroup = (id, params) =>
  axiosServices.put(`producerGroup/${id}`, params);

const updateStatusProducerGroup = (id, params) =>
  axiosServices.put(`producerGroup/updateStatus/${id}`, params);

const deleteProducerGroup = (id) => axiosServices.delete(`producerGroup/${id}`);

export {
  getListProducerGroup,
  getOneProducerGroup,
  createProducerGroup,
  updateProducerGroup,
  updateStatusProducerGroup,
  deleteProducerGroup,
};
