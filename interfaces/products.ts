export interface IProduct {
  _id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ISize[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidType;
  gender: 'men' | 'women' | 'kid' | 'unisex'

  // TODO: add createdAt & updatedAt
  createdAt: string;
  updatedAt: string;
}

export type ISize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type ValidType = 'shirts' | 'pants' | 'hoodies' | 'hats';