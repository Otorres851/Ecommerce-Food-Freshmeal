<template>
  <nav>
    <div class="top">
      <div class="container flex justify-between">
        <div class="contact flex items-center">
          <span class="fas fa-phone-alt"></span>
          <div>
            <h5>{{ t("contact.callUs") }} {{ t("contact.phone") }}</h5>
            <h6>{{ t("contact.email") }} {{ t("contact.emailValue") }}</h6>
          </div>
        </div>

        <div class="branding">
          <img :src="logo" alt="Freshmeal logo" />
        </div>

        <div class="time flex items-center">
          <span class="far fa-clock"></span>
          <div>
            <h5>{{ t("contact.workingHours") }}</h5>
            <h6>{{ t("contact.workingHoursValue") }}</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar magic-shadow">
      <div class="container flex justify-center">
        <RouterLink
          to="/"
          class="nav-link"
          active-class="active"
          exact-active-class="active"
        >
          {{ t("nav.home") }}
        </RouterLink>

        <RouterLink to="/about" class="nav-link" active-class="active">
          {{ t("nav.about") }}
        </RouterLink>

        <a href="#">{{ t("nav.products") }}</a>
        <a href="#">{{ t("nav.blog") }}</a>
        <a href="#">{{ t("nav.shop") }}</a>
        <a href="#">{{ t("nav.services") }}</a>
        <a href="#">{{ t("nav.gallery") }}</a>
        <a href="#">{{ t("nav.contact") }}</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import logo from "@/assets/icons/logo.svg";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
