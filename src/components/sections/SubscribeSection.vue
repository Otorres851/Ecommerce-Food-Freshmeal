<template>
  <section class="subscribe">
    <div class="container flex items-center">
      <div>
        <img :src="rasberry" alt="Raspberry image" />
      </div>

      <div>
        <h1>{{ t("subscribe.title") }}</h1>
        <p>{{ t("subscribe.description") }}</p>

        <div class="input-wrap">
          <input type="email" :placeholder="t('subscribe.placeholder')" />
          <button>{{ t("common.subscribe") }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import rasberry from "@/assets/images/rasberry.png";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
