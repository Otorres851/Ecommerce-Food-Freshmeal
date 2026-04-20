import type { Recipe } from "@/types/recipe";

interface DummyJsonRecipesResponse {
  recipes: Array<{
    id: number;
    name: string;
    image: string;
    cuisine?: string;
    difficulty?: string;
    rating?: number;
    prepTimeMinutes?: number;
    cookTimeMinutes?: number;
    caloriesPerServing?: number;
  }>;
}

export async function fetchRecipes(limit = 6): Promise<Recipe[]> {
  const response = await fetch(`https://dummyjson.com/recipes?limit=${limit}`);

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data: DummyJsonRecipesResponse = await response.json();

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
  }));
}
