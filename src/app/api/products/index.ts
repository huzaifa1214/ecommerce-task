import { GetAllProductsResponse } from "@/types/Product";
import axios from "axios";

export async function getAllProducts() {
  return axios.get<GetAllProductsResponse>("https://dummyjson.com/products");
}
