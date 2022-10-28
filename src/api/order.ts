import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListOrder = (params) =>
  axiosServices.get(`order?${stringify(params)}`);

const getOneOrder = (id) => axiosServices.get(`order/${id}`);

const createOrder = (params) => axiosServices.post(`order`, params);

const updateOrder = (id, params) => axiosServices.put(`order/${id}`, params);

const updateStatusOrder = (id, params) =>
  axiosServices.put(`order/updateStatus/${id}`, params);

const deleteOrder = (id) => axiosServices.delete(`order/${id}`);

export {
  getListOrder,
  getOneOrder,
  createOrder,
  updateOrder,
  updateStatusOrder,
  deleteOrder,
};
