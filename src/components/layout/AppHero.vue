<template>
  <header class="hero flex items-center">
    <div class="container">
      <div class="welcome flex items-center">
        <span>{{ t("hero.welcome") }}</span>
        <img :src="logo2" alt="Freshmeal logo" />
      </div>

      <h1>
        {{ titleBefore }}
        <span>{{ t("hero.highlighted") }}</span>
        {{ titleAfter }}
      </h1>

      <p>{{ t("hero.description") }}</p>

      <div>
        <button class="btn btn-primary">{{ t("hero.readMore") }}</button>
        <button class="btn btn-secondary">{{ t("hero.shopNow") }}</button>
      </div>

      <div class="hero-image">
        <img :src="straw" alt="Strawberry image" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logo2 from "@/assets/icons/logo-2.svg";
import straw from "@/assets/images/straw.png";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const titleBefore = computed(() => {
  return locale.value === "es" ? "La mejor " : "The World Best ";
});

const titleAfter = computed(() => {
  return locale.value === "es" ? " del mundo" : " Website";
});
</script>
