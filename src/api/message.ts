import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListMessage = (params) =>
  axiosServices.get(`message?${stringify(params)}`);

const getOneMessage = (id) => axiosServices.get(`message/${id}`);

const createMessage = (params) => axiosServices.post(`message`, params);

const updateMessage = (id, params) =>
  axiosServices.put(`message/${id}`, params);

const updateStatusMessage = (id, params) =>
  axiosServices.put(`message/updateStatus/${id}`, params);

const deleteMessage = (id) => axiosServices.delete(`message/${id}`);

export {
  getListMessage,
  getOneMessage,
  createMessage,
  updateMessage,
  updateStatusMessage,
  deleteMessage,
};
