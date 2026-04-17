<template>
  <section class="contact-us flex">
    <div class="contact-info-wrapper">
      <h1 class="section-heading">{{ t("sections.contactUs") }}</h1>

      <div class="contact-info">
        <div>
          <div>
            <img :src="phoneIcon" alt="Phone icon" />
            <div>
              <span>{{ t("contact.callUs") }}</span>
              <span>{{ t("contact.phone") }}</span>
            </div>
          </div>

          <div>
            <img :src="bagIcon" alt="Mail icon" />
            <div>
              <span>{{ t("contact.email") }}</span>
              <span>{{ t("contact.emailValue") }}</span>
            </div>
          </div>

          <div>
            <img :src="clockIcon" alt="Clock icon" />
            <div>
              <span>{{ t("contact.workingHours") }}</span>
              <span>{{ t("contact.workingHoursValue") }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39280650613!2d-74.24789655790046!3d4.648625943737085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1635978349560!5m2!1ses!2sco"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
import bagIcon from "@/assets/icons/bag-2.svg";
import clockIcon from "@/assets/icons/clock-2.svg";
import phoneIcon from "@/assets/icons/phone-2.svg";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
