<template>
  <section class="our-services">
    <div class="container">
      <h1 class="section-heading">{{ t("sections.ourServices") }}</h1>

      <div class="card-wrapper flex">
        <div
          v-for="service in services"
          :key="service.id"
          class="service-card magic-shadow-sm"
          @click="selectedService = service.id"
        >
          <div
            class="service-icon-wrap"
            :class="{ active: selectedService === service.id }"
          >
            <span class="material-icons service-icon">
              {{ service.icon }}
            </span>
          </div>

          <h2 :class="{ 'text-primary': selectedService === service.id }">
            {{ service.title }}
          </h2>

          <p>{{ service.text }}</p>

          <button
            class="btn"
            :class="
              selectedService === service.id ? 'btn-primary' : 'btn-secondary'
            "
          >
            {{ t("common.readMore") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const selectedService = ref(2);

const services = computed(() => [
  {
    id: 1,
    icon: "local_shipping",
    title: t("services.deliveryTitle"),
    text: t("services.deliveryText"),
  },
  {
    id: 2,
    icon: "restaurant",
    title: t("services.freshFoodTitle"),
    text: t("services.freshFoodText"),
  },
  {
    id: 3,
    icon: "support_agent",
    title: t("services.supportTitle"),
    text: t("services.supportText"),
  },
]);
</script>
