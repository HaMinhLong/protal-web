export interface PaymentMethodType {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: string | Date;
  status?: number;
}

export interface FilterPaymentMethod {
  name?: string;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  status?: string;
}
