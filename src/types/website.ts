import { WebsiteGroupType } from "types/websiteGroup";

export interface WebsiteType {
  id?: number;
  name?: string;
  description?: string;
  logo?: string;
  createdAt?: string | Date;
  websiteGroup?: WebsiteGroupType;
  websiteGroupId?: number;
  status?: number;
}

export interface FilterWebsite {
  name?: string;
  websiteGroupId?: string | number;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  websiteGroupId?: string;
  status?: string;
}
