export interface UserGroupType {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: string | Date;
  status?: number;
}

export interface FilterUserGroup {
  name?: string;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  status?: string;
}
