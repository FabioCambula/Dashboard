import { createRouter, createWebHistory } from "vue-router";
// Importa i componenti per le diverse pagine. Assicurati di creare questi componenti o di modificarli in base alle tue necessità.
import EnergyBox from "../components/EnergyBox.vue";
import WeatherBox from "../components/WeatherBox.vue";
import LogBox from "../components/LogBox.vue";

const routes = [
  { path: "/", redirect: "/solar" },
  { path: "/solar", component: EnergyBox },
  { path: "/weather", component: WeatherBox },
  { path: "/logs", component: LogBox },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
