import { WebsiteType } from "types/website";

export interface MenuType {
  id?: number | string;
  text?: string;
  url?: string;
  orderBy?: number;
  position?: number;
  location?: number;
  parent?: string;
  icon?: string;
  websiteId?: string;
  website?: WebsiteType;
  createdAt?: string | Date;
  status?: number;
  children?: MenuType[];
  droppable?: boolean;
}
export interface FilterMenu {
  text?: string;
  websiteId?: string | number;
  location?: string | number;
  status?: string | number;
}

export interface ResponseError {
  text?: string;
  websiteId?: string;
  orderBy?: string;
  position?: string;
  url?: string;
  status?: string;
}

export type CustomData = {
  fileType: string;
  fileSize: string;
  website: any;
};
