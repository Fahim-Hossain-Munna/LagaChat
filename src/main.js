// import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/route.js";
import { createPinia } from "pinia";

// ✅ Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const vueApp = createApp(App);
vueApp.use(router);
vueApp.use(createPinia());
vueApp.mount("#app");
