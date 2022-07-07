import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListWebsiteGroup = (params) =>
  axiosServices.get(
    `${process.env.REACT_APP_SERVER}/websiteGroup?${stringify(params)}`
  );

const getOneWebsiteGroup = (id) =>
  axiosServices.get(`${process.env.REACT_APP_SERVER}/websiteGroup/${id}`);

const createWebsiteGroup = (params) =>
  axiosServices.post(`${process.env.REACT_APP_SERVER}/websiteGroup`, params);

const updateWebsiteGroup = (id, params) =>
  axiosServices.put(
    `${process.env.REACT_APP_SERVER}/websiteGroup/${id}`,
    params
  );

const updateStatusWebsiteGroup = (id, params) =>
  axiosServices.put(
    `${process.env.REACT_APP_SERVER}/websiteGroup/updateStatus/${id}`,
    params
  );

const deleteWebsiteGroup = (id) =>
  axiosServices.delete(`${process.env.REACT_APP_SERVER}/websiteGroup/${id}`);

export {
  getListWebsiteGroup,
  getOneWebsiteGroup,
  createWebsiteGroup,
  updateWebsiteGroup,
  updateStatusWebsiteGroup,
  deleteWebsiteGroup,
};
