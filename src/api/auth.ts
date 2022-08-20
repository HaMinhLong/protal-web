import axiosServices from "utils/axios";

const loginUser = (params: any) => axiosServices.post(`auth/signIn`, params);
const currentUser = (token: string) =>
  axiosServices.get(`me`, {
    headers: {
      "access-token": token,
    },
  });

export { loginUser, currentUser };
