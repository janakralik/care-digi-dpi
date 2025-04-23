import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ProfilView from "../views/ProfilView.vue";
import AdministrationView from "../views/AdministrationView.vue";
import ImpressumView from "../views/ImpressumView.vue";
import DatenschutzView from "../views/DatenschutzView.vue";

const routes = [
  { path: "/", component: DashboardView },
  { path: "/administration", component: AdministrationView },
  { path: "/profil", component: ProfilView },
  { path: "/impressum", component: ImpressumView },
  { path: "/datenschutz", component: DatenschutzView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
