import axiosServices from 'utils/axios';

const uploadImage = (params) => axiosServices.post(`upload`, params);

const deleteImage = (params) => axiosServices.delete(`image`, { data: { params } });

export { uploadImage, deleteImage };
