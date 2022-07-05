import axios from "axios";
import { stringify } from "qs";

const getListUser = (params: any) =>
  axios.get(`${process.env.REACT_APP_SERVER}/user?${stringify(params)}`);

export { getListUser };
