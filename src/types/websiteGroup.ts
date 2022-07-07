export interface WebsiteGroupType {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: string | Date;
  status?: number;
}

export interface FilterWebsiteGroup {
  name?: string;
  status?: string | number;
}

export interface ErrorAddOrEdit {
  name?: string;
  status?: string;
}
