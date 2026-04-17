<template>
  <div
    class="mobile-drawer-overlay"
    :class="{ active: ui.mobileMenuOpen }"
    @click="ui.closeMenu()"
  ></div>

  <aside class="mobile-drawer" :class="{ active: ui.mobileMenuOpen }">
    <div class="mobile-nav-content">
      <div class="mobile-logo">
        <img :src="logo" alt="Freshmeal logo" />
      </div>

      <ul class="mobile-nav-links">
        <li>
          <a href="#" @click="ui.closeMenu()">{{ t("nav.home") }}</a>
        </li>
        <li>
          <a href="#" @click="ui.closeMenu()">{{ t("nav.about") }}</a>
        </li>
        <li>
          <a href="#" @click="ui.closeMenu()">{{ t("nav.products") }}</a>
        </li>
        <li>
          <a href="#" @click="ui.closeMenu()">{{ t("nav.blog") }}</a>
        </li>
        <li>
          <a href="#" @click="ui.closeMenu()">{{ t("nav.shop") }}</a>
        </li>
        <li>
          <a href="#" @click="ui.closeMenu()">{{ t("nav.services") }}</a>
        </li>
        <li>
          <a href="#" @click="ui.closeMenu()">{{ t("nav.contact") }}</a>
        </li>
        <li>
          <a href="#" @click="ui.closeMenu()">{{ t("nav.login") }}</a>
        </li>
        <li>
          <a href="#" @click="ui.closeMenu()">{{ t("nav.register") }}</a>
        </li>
      </ul>

      <div class="mobile-extra">
        <div class="block">
          <span class="icon fas fa-phone-alt"></span>
          <div>
            <h5>{{ t("contact.callUs") }} {{ t("contact.phone") }}</h5>
            <h6>{{ t("contact.email") }} {{ t("contact.emailValue") }}</h6>
          </div>
        </div>

        <div class="block">
          <span class="icon far fa-clock"></span>
          <div>
            <h5>{{ t("contact.workingHours") }}</h5>
            <h6>{{ t("contact.workingHoursValue") }}</h6>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import logo from "@/assets/icons/logo.svg";
import { useUiStore } from "@/stores/ui";
import { useI18n } from "vue-i18n";

const ui = useUiStore();
const { t } = useI18n();
</script>
