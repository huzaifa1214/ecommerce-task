export type Product = {
  id: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export type GetAllProductsResponse = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};
