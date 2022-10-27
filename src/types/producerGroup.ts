export interface ProducerGroupType {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: string | Date;
  status?: number;
}

export interface FilterProducerGroup {
  name?: string;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  status?: string;
}
