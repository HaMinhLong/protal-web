import { WebsiteType } from "types/website";

export interface MenuType {
  id?: number;
  name?: string;
  url?: string;
  orderBy?: number;
  position?: number;
  parentId?: string;
  websiteId?: string;
  website?: WebsiteType;
  createdAt?: string | Date;
  status?: number;
  children?: MenuType[];
}
export interface FilterMenu {
  name?: string;
  websiteId?: string | number;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  websiteId?: string;
  orderBy?: string;
  position?: string;
  url?: string;
  status?: string;
}

export type CustomData = {
  fileType: string;
  fileSize: string;
};
