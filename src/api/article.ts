import axiosServices from "utils/axios";

const createArticle = (params: any) => axiosServices.post(`article`, params);

export { createArticle };
