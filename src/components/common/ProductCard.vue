<template>
  <div class="food-card magic-shadow-sm">
    <div class="card-badge" v-if="subtitle">{{ subtitle }}</div>

    <div
      class="product-image flex items-center justify-center clickable"
      @click="$emit('view-details')"
    >
      <img :src="product.image" :alt="product.name" />
      <div class="image-overlay">
        {{ t("common.viewDetails") }}
      </div>
    </div>

    <hr />

    <div class="card-body">
      <h2 class="text-center">{{ product.name }}</h2>

      <p v-if="time" class="product-time text-center">{{ time }}</p>

      <div class="stars flex justify-center items-center">
        <img
          v-for="index in product.rating"
          :key="'filled-' + index"
          :src="starFilled"
          alt="star"
        />
        <img
          v-for="index in 5 - product.rating"
          :key="'empty-' + index"
          :src="starGrey"
          alt="star"
        />
      </div>

      <div class="price text-center">
        $
        {{ product.price.toLocaleString(locale === "es" ? "es-CO" : "en-US") }}
      </div>

      <div class="product-actions">
        <div class="flex justify-center">
          <button @click="addItem">
            <i class="material-icons">shopping_cart</i>
            <span>{{ t("common.addToCart") }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import starGrey from "@/assets/icons/star-grey.svg";
import starFilled from "@/assets/icons/start-filled.svg";
import { useCartStore } from "@/stores/cart";
import type { Product } from "@/types/product";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  product: Product;
  subtitle?: string;
  time?: string;
}>();

defineEmits<{
  (e: "view-details"): void;
}>();

const cart = useCartStore();
const { t, locale } = useI18n();

const addItem = () => {
  cart.addToCart({
    id: props.product.id,
    name: props.product.name,
    price: props.product.price,
    image: props.product.image,
    quantity: 1,
  });
};
</script>
