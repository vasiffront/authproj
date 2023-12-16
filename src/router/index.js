import { createRouter, createWebHistory } from "vue-router";
import HomeName from "../components/HomeName.vue";
import LoginView from "../components/LoginView.vue";
import RegisterForm from "../components/RegisterForm.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeName },
    { path: "/login", component: LoginView },
    { path: "/register", component: RegisterForm },
  ],
});
