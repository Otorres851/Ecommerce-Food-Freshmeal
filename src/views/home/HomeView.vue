<template>
  <v-app>
    <div class="main-wrapper">
      <MobileDrawer />

      <button class="mobile-nav-toggle" @click="ui.toggleMenu()">
        <span class="material-icons">menu</span>
      </button>

      <div class="site-content-wrapper">
        <div class="site-content">
          <AppTopbar />
          <AppNavbar />
          <AppHero />
          <TopProducts />
          <AboutMeal />
          <OurServices />
          <BigDeals />
          <LatestNews />
          <SubscribeSection />
          <ContactSection />
          <AppFooter />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import AppFooter from "@/components/layout/AppFooter.vue";
import AppHero from "@/components/layout/AppHero.vue";
import AppNavbar from "@/components/layout/AppNavbar.vue";
import AppTopbar from "@/components/layout/AppTopbar.vue";
import MobileDrawer from "@/components/layout/MobileDrawer.vue";
import AboutMeal from "@/components/sections/AboutMeal.vue";
import BigDeals from "@/components/sections/BigDeals.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import LatestNews from "@/components/sections/LatestNews.vue";
import OurServices from "@/components/sections/OurServices.vue";
import SubscribeSection from "@/components/sections/SubscribeSection.vue";
import TopProducts from "@/components/sections/TopProducts.vue";
import { useUiStore } from "@/stores/ui";

const ui = useUiStore();
</script>
