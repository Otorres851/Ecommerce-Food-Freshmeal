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
}
