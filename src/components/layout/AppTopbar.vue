<template>
  <header class="topbar">
    <div class="container flex justify-between items-center">
      <div class="icons">
        <a href="#"><span class="fab fa-facebook-square"></span></a>
        <a href="#"><span class="fab fa-twitter-square"></span></a>
        <a href="#"><span class="fab fa-google-plus-square"></span></a>
        <a href="#"><span class="fab fa-instagram"></span></a>
        <a href="#"><span class="fas fa-search"></span></a>
      </div>

      <div class="auth flex items-center">
        <div class="lang-switcher">
          <button
            :class="{ active: locale === 'es' }"
            @click="changeLang('es')"
          >
            ES
          </button>
          <button
            :class="{ active: locale === 'en' }"
            @click="changeLang('en')"
          >
            EN
          </button>
        </div>

        <span class="divider">|</span>

        <div>
          <a href="#">
            <span class="material-icons">person</span>{{ t("topbar.login") }}
          </a>
        </div>

        <span class="divider">|</span>

        <div>
          <a href="#">
            <span class="material-icons">app_registration</span
            >{{ t("topbar.register") }}
          </a>
        </div>

        <span class="divider">|</span>

        <div>
          <a href="#">
            <span class="material-icons">shopping_cart</span>
            {{ cart.totalItems }} {{ t("common.items") }} - (${{
              formattedTotal
            }})
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const cart = useCartStore();

const changeLang = (lang: "es" | "en") => {
  locale.value = lang;
};

const formattedTotal = computed(() => {
  return cart.totalPrice.toLocaleString(
    locale.value === "es" ? "es-CO" : "en-US",
  );
});
</script>
