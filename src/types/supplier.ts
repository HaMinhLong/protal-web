export interface SupplierType {
  id?: number;
  name?: string;
  description?: string;
  supplierGroupId?: string;
  supplierGroup?: { id: number; name: string };
  createdAt?: string | Date;
  status?: number;
}

export interface FilterSupplier {
  name?: string;
  supplierGroupId?: string | number;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  status?: string;
}
