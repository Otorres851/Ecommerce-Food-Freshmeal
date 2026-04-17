<template>
  <footer>
    <div class="container">
      <div class="box">
        <h3>{{ t("sections.aboutUs") }}</h3>
        <p>{{ t("footer.aboutText") }}</p>
        <button class="btn btn-secondary">{{ t("common.readMore") }}</button>
      </div>

      <div class="box">
        <h3>{{ t("sections.quickLinks") }}</h3>
        <ul>
          <li>
            <a href="#">{{ t("nav.home") }}</a>
          </li>
          <li>
            <a href="#">{{ t("nav.about") }}</a>
          </li>
          <li>
            <a href="#">{{ t("nav.products") }}</a>
          </li>
          <li>
            <a href="#">{{ t("nav.blog") }}</a>
          </li>
          <li>
            <a href="#">{{ t("nav.services") }}</a>
          </li>
          <li>
            <a href="#">{{ t("nav.gallery") }}</a>
          </li>
          <li>
            <a href="#">{{ t("nav.contact") }}</a>
          </li>
        </ul>
      </div>

      <div class="box">
        <h3>{{ t("sections.followUs") }}</h3>
        <div>
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook-square"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter-square"></i>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-google-plus-square"></i>
                <span>Google +</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="box instagram-api">
        <h3>{{ t("sections.instagram") }}</h3>
        <div class="post-wrap">
          <div v-for="index in 6" :key="index">
            <img :src="foodTable" alt="Instagram post" />
          </div>
        </div>
      </div>
    </div>
  </footer>

  <footer class="copyright">
    <div>
      {{ t("footer.copyright") }}
      <a href="https://otorres851.github.io/Portafolio/" target="_blank"
        >Oscar Torres-Portfolio</a
      >.
    </div>
  </footer>
</template>

<script setup lang="ts">
import foodTable from "@/assets/images/food-table.jpg";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
