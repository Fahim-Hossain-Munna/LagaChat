import { createWebHistory, createRouter } from "vue-router";

import Chat from "../pages/Chat.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

const routes = [
  { path: "/", component: Chat },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
