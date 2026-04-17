<template>
  <section class="big-deal">
    <div class="container">
      <h1 class="section-heading text-pure">{{ t("sections.bigDeals") }}</h1>

      <div class="timer">
        <div>
          <span>{{ timeLeft.days }}</span>
          <span>{{ t("common.days") }}</span>
        </div>
        <div>
          <span>{{ timeLeft.hours }}</span>
          <span>{{ t("common.hours") }}</span>
        </div>
        <div>
          <span>{{ timeLeft.minutes }}</span>
          <span>{{ t("common.minutes") }}</span>
        </div>
        <div>
          <span>{{ timeLeft.seconds }}</span>
          <span>{{ t("common.seconds") }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const targetDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
targetDate.setDate(targetDate.getDate() + 2);
targetDate.setHours(targetDate.getHours() + 24);
targetDate.setMinutes(targetDate.getMinutes() + 55);
targetDate.setSeconds(targetDate.getSeconds() + 58);

const now = ref(new Date());
let intervalId: number | undefined;

const pad = (value: number) => String(value).padStart(2, "0");

const timeLeft = computed(() => {
  const difference = targetDate.getTime() - now.value.getTime();

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  if (difference <= 0) {
    targetDate.setTime(Date.now() + 48 * 60 * 60 * 1000);
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
});

onMounted(() => {
  intervalId = window.setInterval(() => {
    now.value = new Date();
  }, 1000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
