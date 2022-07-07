import axiosServices from "utils/axios";
import { stringify } from "qs";

const createArticle = (params: any) =>
  axiosServices.post(`${process.env.REACT_APP_SERVER}/article`, params);

export { createArticle };
