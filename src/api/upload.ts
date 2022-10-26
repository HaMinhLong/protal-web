import axiosServices from "utils/axios";

const uploadImage = (params) => axiosServices.post(`upload`, params);

export { uploadImage };
