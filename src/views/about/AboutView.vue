<template>
  <div class="about-page">
    <section class="about-hero-v2">
      <div class="container">
        <div class="about-back">
          <RouterLink to="/" class="about-back-link">
            <span class="material-icons">arrow_back</span>
            <span>{{ t("aboutPage.backHome") }}</span>
          </RouterLink>
        </div>

        <div class="about-hero-v2-grid">
          <div class="about-hero-v2-content">
            <p class="about-kicker">{{ t("aboutPage.kicker") }}</p>

            <div class="about-brand-line">
              <span>{{ t("aboutPage.brandIntro") }}</span>
              <img :src="logo" alt="FreshMeal logo" />
            </div>

            <h1>{{ t("aboutPage.title") }}</h1>

            <p class="about-description">
              {{ t("aboutPage.description") }}
            </p>

            <div class="about-hero-actions">
              <button class="btn btn-primary">
                {{ t("aboutPage.primaryBtn") }}
              </button>
              <button class="btn btn-secondary btn-outline-about">
                {{ t("aboutPage.secondaryBtn") }}
              </button>
            </div>
          </div>

          <div class="about-hero-v2-image">
            <img :src="heroImage" alt="FreshMeal about" />
          </div>
        </div>
      </div>
    </section>

    <section class="about-story-v2">
      <div class="container">
        <div class="about-story-v2-grid">
          <div class="about-story-v2-image">
            <img :src="storyImage" alt="Our story" />
          </div>

          <div class="about-story-v2-text">
            <p class="about-kicker">{{ t("aboutPage.storyKicker") }}</p>
            <h2>{{ t("aboutPage.storySubtitle") }}</h2>
            <p>{{ t("aboutPage.storyText1") }}</p>
            <p>{{ t("aboutPage.storyText2") }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-values-v2">
      <div class="container">
        <p class="about-kicker text-center">
          {{ t("aboutPage.valuesKicker") }}
        </p>
        <h2 class="about-section-title">{{ t("aboutPage.valuesTitle") }}</h2>

        <div class="about-values-v2-grid">
          <article
            class="about-value-card-v2"
            v-for="value in values"
            :key="value.title"
          >
            <div class="about-value-icon-v2">
              <span class="material-icons">{{ value.icon }}</span>
            </div>

            <div class="about-value-card-v2-content">
              <h3>{{ value.title }}</h3>
              <p>{{ value.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="about-stats-v2">
      <div class="container">
        <div class="about-stats-v2-grid">
          <div class="about-stat-v2" v-for="stat in stats" :key="stat.label">
            <h3>{{ stat.value }}</h3>
            <p>{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-team-v2">
      <div class="container">
        <p class="about-kicker text-center">{{ t("aboutPage.teamKicker") }}</p>
        <h2 class="about-section-title">{{ t("aboutPage.teamTitle") }}</h2>

        <div class="about-team-v2-grid">
          <article
            class="about-team-card-v2"
            v-for="member in team"
            :key="member.name"
          >
            <div class="about-team-card-v2-image" :class="member.imageClass">
              <img :src="member.image" :alt="member.name" />
            </div>

            <div class="about-team-card-v2-content">
              <h3>{{ member.name }}</h3>
              <span>{{ member.role }}</span>
              <p>{{ member.text }}</p>

              <div class="about-team-socials">
                <a href="#" aria-label="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="about-cta-v2">
      <div class="container">
        <div class="about-cta-v2-box">
          <div class="about-cta-v2-image">
            <img :src="ctaImage" alt="Fresh salad" />
          </div>

          <div class="about-cta-v2-content">
            <h2>{{ t("aboutPage.ctaTitle") }}</h2>
            <p>{{ t("aboutPage.ctaText") }}</p>
            <button class="btn btn-primary">{{ t("aboutPage.ctaBtn") }}</button>
          </div>

          <div class="about-cta-v2-leaf">
            <span class="material-icons">eco</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";

import logo from "@/assets/icons/logo.svg";
import heroImage from "@/assets/images/food-table.jpg";
import ctaImage from "@/assets/images/plate-3.png";
import storyImage from "@/assets/images/yogurt.png";

import team1 from "@/assets/images/team-1.jpg";
import team2 from "@/assets/images/team-2.jpg";
import team3 from "@/assets/images/team-3.jpg";

const { t } = useI18n();

const values = computed(() => [
  {
    icon: "eco",
    title: t("aboutPage.values.fresh.title"),
    text: t("aboutPage.values.fresh.text"),
  },
  {
    icon: "local_shipping",
    title: t("aboutPage.values.delivery.title"),
    text: t("aboutPage.values.delivery.text"),
  },
  {
    icon: "favorite",
    title: t("aboutPage.values.quality.title"),
    text: t("aboutPage.values.quality.text"),
  },
]);

const stats = computed(() => [
  { value: "10+", label: t("aboutPage.stats.years") },
  { value: "50K+", label: t("aboutPage.stats.orders") },
  { value: "120+", label: t("aboutPage.stats.recipes") },
  { value: "24/7", label: t("aboutPage.stats.support") },
]);

const team = computed(() => [
  {
    name: "Camila Torres",
    role: t("aboutPage.teamMembers.chef"),
    text: t("aboutPage.teamMembers.text1"),
    image: team1,
    imageClass: "team-image-1",
  },
  {
    name: "Daniel Reyes",
    role: t("aboutPage.teamMembers.operations"),
    text: t("aboutPage.teamMembers.text2"),
    image: team2,
    imageClass: "team-image-2",
  },
  {
    name: "Laura Gómez",
    role: t("aboutPage.teamMembers.experience"),
    text: t("aboutPage.teamMembers.text3"),
    image: team3,
    imageClass: "team-image-3",
  },
]);
</script>
