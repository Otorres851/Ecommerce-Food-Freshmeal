<template>
  <section class="top-products">
    <div class="container">
      <h1 class="section-heading">{{ t("sections.topProducts") }}</h1>

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
          :loop="true"
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
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }"
        >
          <SwiperSlide v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="text-center btn-wrapper">
        <button class="btn btn-secondary">{{ t("common.viewMore") }}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useI18n } from "vue-i18n";

import ProductCard from "@/components/common/ProductCard.vue";
import type { Product } from "@/types/product";

import nextIcon from "@/assets/icons/next.svg";
import prevIcon from "@/assets/icons/pre.svg";
import plate1 from "@/assets/images/plate-1.png";
import plate2 from "@/assets/images/plate-2.png";
import plate3 from "@/assets/images/plate-3.png";

const { t } = useI18n();
const modules = [Navigation, Autoplay];

const products: Product[] = [
  { id: 1, name: "Summer Salad", price: 10000, image: plate1, rating: 3 },
  { id: 2, name: "Russian Salad", price: 10000, image: plate2, rating: 3 },
  { id: 3, name: "Greek Salad", price: 10000, image: plate3, rating: 3 },
  { id: 4, name: "Cottage pie", price: 10000, image: plate3, rating: 3 },
];
</script>
