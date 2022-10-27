export interface MessageType {
  id?: number;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  websiteId?: string | number;
  website?: { id: number; name: string };
  createdAt?: string | Date;
  status?: number;
}

export interface FilterMessage {
  name?: string;
  phone?: string;
  email?: string;
  websiteId?: string | number;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  status?: string;
}
