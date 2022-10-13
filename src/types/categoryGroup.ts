export interface CategoryGroupType {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: string | Date;
  status?: number;
}

export interface FilterCategoryGroup {
  name?: string;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  status?: string;
}
