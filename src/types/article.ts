export interface ArticleType {
  id?: number;
  title?: string;
  description?: string;
  content?: string;
  url?: string;
  author?: number;
  source?: number;
  label?: boolean;
  images?: string;
  websiteId?: number;
  categoryId?: number;
  website?: { id: number; name: string };
  category?: { id: number; text: string };
  createdAt?: string | Date;
  status?: number;
}

export interface FilterArticle {
  title?: string;
  websiteId?: number | string;
  categoryId?: number | string;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  status?: string;
}
