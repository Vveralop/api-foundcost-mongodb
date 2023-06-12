import { Document } from 'mongoose';

export interface Founding extends Document {
  name: string;
  description: object;
  price: number;
  createdAt: Date;
}
