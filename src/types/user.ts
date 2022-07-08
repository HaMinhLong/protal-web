import { UserGroupType } from "types/userGroup";
export interface UserType {
  id?: number;
  username?: string;
  password?: string;
  fullName?: string;
  email?: string;
  mobile?: number;
  status?: number;
  createdAt?: string;
  userGroup?: UserGroupType;
  userGroupId?: number;
}
export interface FilterUser {
  email?: string;
  userGroupId?: number;
  status?: string | number;
}
export interface ResponseError {
  fullName?: string;
  username?: string;
  password?: string;
  mobile?: string;
  email?: string;
  userGroupId?: string;
  status?: string;
}
