import axios from "axios";

const END_POINT = `${process.env.REACT_APP_SERVER}`;

const loginUser = (params: any) => axios.post(`${END_POINT}/login`, params);
const currentUser = (token: string) =>
  axios.get(`${END_POINT}/me`, {
    headers: {
      "access-token": token,
    },
  });

export { loginUser, currentUser };
