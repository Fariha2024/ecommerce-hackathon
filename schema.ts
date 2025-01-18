import { product } from './product';
import { createSchema } from 'sanity';

export const schema = {
  name: 'default',
  types: [product],
};
