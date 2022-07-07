import axiosServices from "utils/axios";

const END_POINT = `${process.env.REACT_APP_SERVER}`;

const loginUser = (params: any) =>
  axiosServices.post(`${END_POINT}/auth/signIn`, params);
const currentUser = (token: string) =>
  axiosServices.get(`${END_POINT}/me`, {
    headers: {
      "access-token": token,
    },
  });

export { loginUser, currentUser };
