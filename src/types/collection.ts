import { Linkedin, ProductType } from "types/product";

export interface CollectionType {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: string | Date;
  websiteId?: string | number;
  categoryId?: string | number;
  website?: Linkedin;
  category?: Linkedin;
  collectionProducts?: any;
  status?: number;
  products?: ProductType[];
}

export interface FilterCollection {
  name?: string;
  websiteId?: number | string;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  status?: string;
}
