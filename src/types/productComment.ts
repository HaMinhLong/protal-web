import { Linkedin } from "./product";

export interface ProductCommentType {
  id?: number;
  name?: string;
  phone?: string;
  rate?: number;
  comment?: string;
  websiteId?: number | string;
  productId?: number | string;
  website?: Linkedin;
  product?: Linkedin;
  status?: number;
  createdAt?: string | Date;
}

export interface FilterProductComment {
  name?: string;
  phone?: string;
  rate?: number;
  websiteId?: number | string;
  productId?: number | string;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  status?: string;
}
