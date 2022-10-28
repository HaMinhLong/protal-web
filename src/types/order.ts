import { Linkedin } from "./product";

export interface OrderType {
  id?: number;
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  description?: string;
  totalPrice?: number;
  websiteId?: number | string;
  paymentMethodId?: number | string;
  website?: Linkedin;
  paymentMethod?: Linkedin;
  createdAt?: string | Date;
  status?: number;
  productOrders?: ProductOrderType[];
}

export interface ProductOrderType {
  id: number;
  amount: number;
  price: number;
  negotiablePrice: number;
  totalPrice: number;
  flag: "add" | "update" | "delete";
  orderId?: string | number;
  productId: number | string;
  productName: string;
}

export interface FilterOrder {
  name?: string;
  phone?: string;
  email?: string;
  websiteId?: string;
  paymentMethodId?: string;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  status?: string;
}
