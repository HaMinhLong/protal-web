import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListPaymentMethod = (params) =>
  axiosServices.get(`paymentMethod?${stringify(params)}`);

const getOnePaymentMethod = (id) => axiosServices.get(`paymentMethod/${id}`);

const createPaymentMethod = (params) =>
  axiosServices.post(`paymentMethod`, params);

const updatePaymentMethod = (id, params) =>
  axiosServices.put(`paymentMethod/${id}`, params);

const updateStatusPaymentMethod = (id, params) =>
  axiosServices.put(`paymentMethod/updateStatus/${id}`, params);

const deletePaymentMethod = (id) => axiosServices.delete(`paymentMethod/${id}`);

export {
  getListPaymentMethod,
  getOnePaymentMethod,
  createPaymentMethod,
  updatePaymentMethod,
  updateStatusPaymentMethod,
  deletePaymentMethod,
};
