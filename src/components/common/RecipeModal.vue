<template>
  <div
    v-if="modelValue"
    class="recipe-modal-overlay"
    @click="$emit('update:modelValue', false)"
  >
    <div class="recipe-modal" @click.stop>
      <button
        class="recipe-modal-close"
        @click="$emit('update:modelValue', false)"
      >
        <span class="material-icons">close</span>
      </button>

      <div v-if="recipe" class="recipe-modal-content">
        <div class="recipe-modal-image">
          <img :src="recipe.image" :alt="recipe.name" />
        </div>

        <div class="recipe-modal-body">
          <div class="recipe-modal-meta">
            <span v-if="recipe.cuisine" class="recipe-chip">{{
              recipe.cuisine
            }}</span>
            <span v-if="recipe.difficulty" class="recipe-chip">{{
              recipe.difficulty
            }}</span>
            <span v-if="recipe.mealType?.length" class="recipe-chip">{{
              recipe.mealType[0]
            }}</span>
          </div>

          <h2>{{ recipe.name }}</h2>

          <p class="recipe-modal-summary">
            <strong>{{ totalTime }}</strong>
            <span v-if="recipe.servings">
              · {{ recipe.servings }} servings</span
            >
            <span v-if="recipe.caloriesPerServing">
              · {{ recipe.caloriesPerServing }} cal</span
            >
          </p>

          <div class="recipe-modal-sections">
            <div>
              <h3>Ingredients</h3>
              <ul>
                <li
                  v-for="(ingredient, index) in recipe.ingredients || []"
                  :key="index"
                >
                  {{ ingredient }}
                </li>
              </ul>
            </div>

            <div>
              <h3>Instructions</h3>
              <ol>
                <li
                  v-for="(step, index) in recipe.instructions || []"
                  :key="index"
                >
                  {{ step }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from "@/types/recipe";
import { computed } from "vue";

const props = defineProps<{
  modelValue: boolean;
  recipe: Recipe | null;
}>();

defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const totalTime = computed(() => {
  if (!props.recipe) return "";
  const total =
    (props.recipe.prepTimeMinutes || 0) + (props.recipe.cookTimeMinutes || 0);
  return `${total} min`;
});
</script>
