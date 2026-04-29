<template>
  <section class="latest-news">
    <div class="container">
      <h1 class="section-heading">{{ t("sections.latestNews") }}</h1>

      <div class="article-wrapper">
        <article
          v-for="article in articles"
          :key="article.id"
          class="card magic-shadow-sm"
        >
          <div>
            <img :src="article.image" :alt="article.title" />
          </div>

          <div class="card-content">
            <div class="post-meta flex items-center justify-between">
              <span>{{ article.date }}</span>
              <div>
                <span
                  >Posted by <strong>{{ article.author }}</strong></span
                >
                <span class="comment-count"
                  >{{ article.comments }} Comments</span
                >
              </div>
            </div>

            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </article>
      </div>

      <div class="text-center btn-wrapper">
        <button class="btn btn-secondary" @click="navigateTo('/products')">
          {{ t("common.viewAll") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import coffee from "@/assets/images/coffee.jpg";
import donut from "@/assets/images/donut.jpg";
import type { Article } from "@/types/article";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const { t } = useI18n();

const articles: Article[] = [
  {
    id: 1,
    date: "July 03, 2025",
    author: "FreshMeal",
    comments: 12,
    title: t("blog.article1.title"),
    description: t("blog.article1.description"),
    image: coffee,
  },
  {
    id: 2,
    date: "July 10, 2025",
    author: "FreshMeal",
    comments: 8,
    title: t("blog.article2.title"),
    description: t("blog.article2.description"),
    image: donut,
  },
];
</script>
