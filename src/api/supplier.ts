import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListSupplier = (params) =>
  axiosServices.get(`supplier?${stringify(params)}`);

const getOneSupplier = (id) => axiosServices.get(`supplier/${id}`);

const createSupplier = (params) => axiosServices.post(`supplier`, params);

const updateSupplier = (id, params) =>
  axiosServices.put(`supplier/${id}`, params);

const updateStatusSupplier = (id, params) =>
  axiosServices.put(`supplier/updateStatus/${id}`, params);

const deleteSupplier = (id) => axiosServices.delete(`supplier/${id}`);

export {
  getListSupplier,
  getOneSupplier,
  createSupplier,
  updateSupplier,
  updateStatusSupplier,
  deleteSupplier,
};
