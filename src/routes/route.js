import { createWebHistory, createRouter } from "vue-router";

import Chat from "../pages/Chat.vue";
import Login from "../pages/Login.vue";

const routes = [
  { path: "/", component: Chat },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
