export interface CategoryType {
  id?: number | string;
  text?: string;
  description?: string;
  url?: string;
  position?: number;
  parent?: number;
  droppable?: boolean;
  isHome?: boolean;
  images?: string;
  websiteId?: number;
  categoryGroupId?: number;
  createdAt?: string | Date;
  status?: number;
}

export interface FilterCategory {
  text?: string;
  websiteId?: number | string;
  categoryGroupId?: number | string;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  status?: string;
}
