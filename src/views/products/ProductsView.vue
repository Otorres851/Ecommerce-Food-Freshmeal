<template>
  <div class="products-page">
    <section class="products-hero">
      <div class="container">
        <div class="products-back">
          <RouterLink to="/" class="products-back-link">
            <span class="material-icons">arrow_back</span>
            <span>{{ t("productsPage.backHome") }}</span>
          </RouterLink>
        </div>

        <div class="products-hero-content">
          <p class="products-kicker">{{ t("productsPage.kicker") }}</p>
          <h1>{{ t("productsPage.title") }}</h1>
          <p>{{ t("productsPage.description") }}</p>
        </div>
      </div>
    </section>

    <section class="products-filters">
      <div class="container">
        <div class="products-filters-wrap">
          <button
            v-for="category in categories"
            :key="category"
            class="filter-btn"
            :class="{ active: selectedCategory === category }"
            @click="changeCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <section class="products-grid-section">
      <div class="container">
        <h2 class="section-heading">{{ t("productsPage.featuredTitle") }}</h2>

        <div v-if="loading" class="products-feedback">
          {{ t("productsPage.loading") }}
        </div>

        <div v-else-if="errorMessage" class="products-feedback error">
          <p>{{ errorMessage }}</p>
          <button class="btn btn-secondary" @click="loadRecipes">
            {{ t("productsPage.tryAgain") }}
          </button>
        </div>

        <div v-else class="products-grid">
          <article
            v-for="recipe in visibleRecipes"
            :key="recipe.id"
            class="product-page-card"
            @click="openRecipeModal(recipe)"
          >
            <div class="product-page-card-image">
              <span v-if="recipe.cuisine" class="product-badge">
                {{ recipe.cuisine }}
              </span>
              <img :src="recipe.image" :alt="recipe.name" />
            </div>

            <div class="product-page-card-content">
              <p class="product-category">
                {{ recipe.mealType?.[0] || recipe.difficulty || "Recipe" }}
              </p>

              <h3>{{ recipe.name }}</h3>

              <p class="product-description">
                {{ getRecipeDescription(recipe) }}
              </p>

              <div class="product-meta">
                <span>{{ getTime(recipe) }}</span>
                <span>{{ normalizeRating(recipe.rating) }} ★</span>
              </div>

              <div class="product-footer">
                <strong class="product-price">
                  $
                  {{
                    getPrice(recipe.caloriesPerServing).toLocaleString(
                      locale === "es" ? "es-CO" : "en-US",
                    )
                  }}
                </strong>

                <button
                  class="product-add-btn"
                  @click.stop="addToCart(recipe)"
                  :aria-label="t('common.addToCart')"
                  :title="t('common.addToCart')"
                >
                  <span class="material-icons">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </article>
        </div>

        <div
          v-if="!loading && !errorMessage && canShowMore"
          class="text-center products-more"
        >
          <button class="btn btn-secondary" @click="showMoreProducts">
            {{ t("productsPage.viewMore") }}
          </button>
        </div>
      </div>
    </section>

    <RecipeModal
      :model-value="isRecipeModalOpen"
      :recipe="selectedRecipe"
      @update:modelValue="handleModalUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import RecipeModal from "@/components/common/RecipeModal.vue";
import { fetchRecipes } from "@/services/recipes";
import { useCartStore } from "@/stores/cart";
import type { Recipe } from "@/types/recipe";
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";

const { t, locale } = useI18n();
const cart = useCartStore();

const recipes = ref<Recipe[]>([]);
const loading = ref(false);
const errorMessage = ref("");
const selectedCategory = ref("All");
const visibleCount = ref(6);

const isRecipeModalOpen = ref(false);
const selectedRecipe = ref<Recipe | null>(null);

const categories = computed(() => {
  const cuisineList = recipes.value
    .map((recipe) => recipe.cuisine)
    .filter((cuisine): cuisine is string => Boolean(cuisine));

  return ["All", ...new Set(cuisineList)];
});

const handleModalUpdate = (value: boolean) => {
  isRecipeModalOpen.value = value;

  if (!value) {
    selectedRecipe.value = null;
  }
};

const filteredRecipes = computed(() => {
  if (selectedCategory.value === "All") return recipes.value;
  return recipes.value.filter(
    (recipe) => recipe.cuisine === selectedCategory.value,
  );
});

const visibleRecipes = computed(() => {
  return filteredRecipes.value.slice(0, visibleCount.value);
});

const canShowMore = computed(() => {
  return visibleCount.value < filteredRecipes.value.length;
});

const changeCategory = (category: string) => {
  selectedCategory.value = category;
  visibleCount.value = 6;
};

const showMoreProducts = () => {
  visibleCount.value += 6;
};

const openRecipeModal = (recipe: Recipe) => {
  selectedRecipe.value = recipe;
  isRecipeModalOpen.value = true;
};

const normalizeRating = (rating?: number) => {
  if (!rating) return 4;
  return Number(rating.toFixed(1));
};

const getTime = (recipe: Recipe) => {
  const total = (recipe.prepTimeMinutes || 0) + (recipe.cookTimeMinutes || 0);
  return `${total} min`;
};

const getPrice = (calories?: number) => {
  const base = calories ? Math.max(12000, calories * 40) : 18000;
  return Math.round(base / 100) * 100;
};

const getRecipeDescription = (recipe: Recipe) => {
  const ingredientPreview = recipe.ingredients?.slice(0, 3).join(", ");
  return ingredientPreview
    ? ingredientPreview
    : t("productsPage.defaultDescription");
};

const addToCart = (recipe: Recipe) => {
  cart.addToCart({
    id: recipe.id,
    name: recipe.name,
    price: getPrice(recipe.caloriesPerServing),
    image: recipe.image,
    quantity: 1,
  });
};

const loadRecipes = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    recipes.value = await fetchRecipes(30);
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : t("productsPage.error");
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadRecipes();
});
</script>
