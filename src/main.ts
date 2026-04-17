import "@/assets/styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "material-icons/iconfont/material-icons.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(i18n);

app.mount("#app");
