import { GetAllProductsResponse, Product } from "@/types/Product";
import axios from "axios";

export async function getAllProducts() {
  return axios.get<GetAllProductsResponse>("https://dummyjson.com/products");
}

export async function getProductById({ id }: { id: string }) {
  return axios.get<Product>(`https://dummyjson.com/products/${id}`);
}
