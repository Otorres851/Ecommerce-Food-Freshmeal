export interface Recipe {
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
