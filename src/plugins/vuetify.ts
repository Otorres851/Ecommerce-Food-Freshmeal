import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import "vuetify/styles";

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#EEBF00",
          secondary: "#232B38",
          danger: "#FE4545",
          light: "#F0F0F0",
          heaven: "#FFFFFF",
          footer: "#2D333F",
        },
      },
    },
  },
});
