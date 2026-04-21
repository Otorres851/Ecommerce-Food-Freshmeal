import api from "@/services/api";
import axios from "axios";

export interface Product {
  id: number;
  title?: string;
  name: string;
  description?: string;
  price?: number;
  rating?: number;
  category?: string;
  image: string;
}

interface DummyJsonProduct {
  id: number;
  title: string;
  description?: string;
  price?: number;
  rating?: number;
  category?: string;
  thumbnail?: string;
  images?: string[];
}

interface DummyJsonProductsResponse {
  products: DummyJsonProduct[];
  total: number;
  skip: number;
  limit: number;
}

export async function fetchProducts(limit = 8): Promise<Product[]> {
  try {
    const { data } = await api.get<DummyJsonProductsResponse>(
      `/products?limit=${limit}`,
    );

    return data.products.map((product) => ({
      id: product.id,
      name: product.title,
      description: product.description,
      price: product.price,
      rating: product.rating,
      category: product.category,
      image: product.images?.[0] || product.thumbnail || "",
    }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message || "Error loading products");
    }

    throw new Error("Unexpected error loading products");
  }
}
