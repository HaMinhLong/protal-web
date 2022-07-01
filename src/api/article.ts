import axios from "axios";
import { stringify } from "qs";

const createArticle = (params: any) =>
  axios.post(`${process.env.REACT_APP_SERVER}/article`, params);

export { createArticle };
