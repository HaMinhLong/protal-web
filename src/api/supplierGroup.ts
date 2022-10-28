import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListSupplierGroup = (params) =>
  axiosServices.get(`supplierGroup?${stringify(params)}`);

const getOneSupplierGroup = (id) => axiosServices.get(`supplierGroup/${id}`);

const createSupplierGroup = (params) =>
  axiosServices.post(`supplierGroup`, params);

const updateSupplierGroup = (id, params) =>
  axiosServices.put(`supplierGroup/${id}`, params);

const updateStatusSupplierGroup = (id, params) =>
  axiosServices.put(`supplierGroup/updateStatus/${id}`, params);

const deleteSupplierGroup = (id) => axiosServices.delete(`supplierGroup/${id}`);

export {
  getListSupplierGroup,
  getOneSupplierGroup,
  createSupplierGroup,
  updateSupplierGroup,
  updateStatusSupplierGroup,
  deleteSupplierGroup,
};
