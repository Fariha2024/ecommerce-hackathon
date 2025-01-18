export interface ProductImage {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  productImage: ProductImage;
  price: number;
  tags: string[];
  dicountPercentage: number;
  isNew: boolean;
}
