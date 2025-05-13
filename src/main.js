// import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/route.js";
import { createPinia } from "pinia";
import "./assets/main.css";

// ✅ Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);
app.mount("#app");
