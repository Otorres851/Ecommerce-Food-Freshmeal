import api from "@/services/api";
import type { Recipe } from "@/types/recipe";
import axios from "axios";

interface DummyJsonRecipe {
  id: number;
  name: string;
  image: string;
  cuisine?: string;
  difficulty?: string;
  rating?: number;
  prepTimeMinutes?: number;
  cookTimeMinutes?: number;
  caloriesPerServing?: number;
  ingredients?: string[];
  instructions?: string[];
  mealType?: string[];
  tags?: string[];
  servings?: number;
}

interface DummyJsonRecipesResponse {
  recipes: DummyJsonRecipe[];
  total: number;
  skip: number;
  limit: number;
}

export async function fetchRecipes(limit = 6): Promise<Recipe[]> {
  try {
    const { data } = await api.get<DummyJsonRecipesResponse>(
      `/recipes?limit=${limit}`,
    );

    return data.recipes.map((recipe) => ({
      id: recipe.id,
      name: recipe.name,
      image: recipe.image,
      cuisine: recipe.cuisine,
      difficulty: recipe.difficulty,
      rating: recipe.rating,
      prepTimeMinutes: recipe.prepTimeMinutes,
      cookTimeMinutes: recipe.cookTimeMinutes,
      caloriesPerServing: recipe.caloriesPerServing,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      mealType: recipe.mealType,
      tags: recipe.tags,
      servings: recipe.servings,
    }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message || "Error al cargar recetas");
    }

    throw new Error("Error inesperado al cargar recetas");
  }
}
