<template>
  <section class="top-products">
    <div class="container">
      <h1 class="section-heading">{{ t("sections.topProducts") }}</h1>

      <div v-if="loading" class="products-feedback">
        Loading featured recipes...
      </div>

      <div v-else-if="errorMessage" class="products-feedback error">
        <p>{{ errorMessage }}</p>
        <button class="btn btn-secondary" @click="loadRecipes">
          Try again
        </button>
      </div>

      <template v-else>
        <div class="slider">
          <button class="slider-btn prev-btn">
            <img :src="prevIcon" alt="Previous" />
          </button>

          <button class="slider-btn next-btn">
            <img :src="nextIcon" alt="Next" />
          </button>

          <Swiper
            class="food-slider"
            :modules="modules"
            :slides-per-view="3"
            :slides-per-group="1"
            :space-between="24"
            :loop="recipes.length > 3"
            :speed="900"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
            :navigation="{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }"
            :breakpoints="{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }"
          >
            <SwiperSlide v-for="recipe in recipes" :key="recipe.id">
              <ProductCard
                :product="{
                  id: recipe.id,
                  name: recipe.name,
                  price: getPrice(recipe.caloriesPerServing),
                  image: recipe.image,
                  rating: normalizeRating(recipe.rating),
                }"
                :subtitle="recipe.cuisine || recipe.difficulty || 'Recipe'"
                :time="getTime(recipe.prepTimeMinutes, recipe.cookTimeMinutes)"
                @view-details="openRecipe(recipe)"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="text-center btn-wrapper">
          <button class="btn btn-secondary" @click="navigateTo('/products')">
            {{ t("common.viewMore") }}
          </button>
        </div>
      </template>
    </div>

    <RecipeModal v-model="showRecipeModal" :recipe="selectedRecipe" />
  </section>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

import ProductCard from "@/components/common/ProductCard.vue";
import RecipeModal from "@/components/common/RecipeModal.vue";
import { fetchRecipes } from "@/services/recipes";
import type { Recipe } from "@/types/recipe";

import nextIcon from "@/assets/icons/next.svg";
import prevIcon from "@/assets/icons/pre.svg";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const { t } = useI18n();
const modules = [Navigation, Autoplay];

const recipes = ref<Recipe[]>([]);
const loading = ref(false);
const errorMessage = ref("");
const showRecipeModal = ref(false);
const selectedRecipe = ref<Recipe | null>(null);

const normalizeRating = (rating?: number) => {
  if (!rating) return 4;
  if (rating >= 4.5) return 5;
  if (rating >= 3.5) return 4;
  if (rating >= 2.5) return 3;
  if (rating >= 1.5) return 2;
  return 1;
};

const getPrice = (calories?: number) => {
  const base = calories ? Math.max(12000, calories * 40) : 18000;
  return Math.round(base / 100) * 100;
};

const getTime = (prep?: number, cook?: number) => {
  const total = (prep || 0) + (cook || 0);
  return total ? `${total} min` : "";
};

const openRecipe = (recipe: Recipe) => {
  selectedRecipe.value = recipe;
  showRecipeModal.value = true;
};

const loadRecipes = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    recipes.value = await fetchRecipes(6);
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : "Could not load recipes.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadRecipes();
});
</script>
