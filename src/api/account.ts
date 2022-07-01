import axios from "axios";
import { stringify } from "qs";

const getListAccount = (params: any) =>
  axios.get(`${process.env.REACT_APP_SERVER}/accounts?${stringify(params)}`);

export { getListAccount };
