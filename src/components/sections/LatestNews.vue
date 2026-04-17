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
        <button class="btn btn-secondary">{{ t("common.viewAll") }}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import coffee from "@/assets/images/coffee.jpg";
import donut from "@/assets/images/donut.jpg";
import type { Article } from "@/types/article";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const articles: Article[] = [
  {
    id: 1,
    date: "July 03, 2017",
    author: "FreshMeal",
    comments: 12,
    title: "Lorem Ipsum is simply dummy text of the printing",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has more letters.",
    image: coffee,
  },
  {
    id: 2,
    date: "July 03, 2017",
    author: "FreshMeal",
    comments: 12,
    title: "Lorem Ipsum is simply dummy text of the printing",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has more letters.",
    image: donut,
  },
];
</script>
