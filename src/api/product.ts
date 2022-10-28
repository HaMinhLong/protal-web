import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListProduct = (params) =>
  axiosServices.get(`product?${stringify(params)}`);

const getOneProduct = (id) => axiosServices.get(`product/${id}`);

const createProduct = (params) => axiosServices.post(`product`, params);

const updateProduct = (id, params) =>
  axiosServices.put(`product/${id}`, params);

const updateStatusProduct = (id, params) =>
  axiosServices.put(`product/updateStatus/${id}`, params);

const deleteProduct = (id) => axiosServices.delete(`product/${id}`);

export {
  getListProduct,
  getOneProduct,
  createProduct,
  updateProduct,
  updateStatusProduct,
  deleteProduct,
};
