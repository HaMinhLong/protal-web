export interface ProducerType {
  id?: number;
  name?: string;
  description?: string;
  producerGroupId?: string;
  producerGroup?: { id: number; name: string };
  createdAt?: string | Date;
  status?: number;
}

export interface FilterProducer {
  name?: string;
  producerGroupId?: string | number;
  status?: string | number;
}

export interface ResponseError {
  name?: string;
  status?: string;
}
