<template>
  <section class="about-meal">
    <div class="container">
      <h1 class="section-heading">{{ t("sections.aboutMeal") }}</h1>

      <div class="about-meal-wrap flex">
        <div class="flex-1">
          <img :src="yogurt" alt="About FreshMeal" />
        </div>

        <div class="flex-1">
          <h2>{{ t("about.title") }}</h2>
          <p>{{ t("about.description") }}</p>
          <button class="btn btn-secondary" @click="navigateTo('/about')">
            {{ t("common.readMore") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import yogurt from "@/assets/images/yogurt.png";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const { t } = useI18n();
</script>
