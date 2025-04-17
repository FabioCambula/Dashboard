import { createRouter, createWebHistory } from "vue-router";
// Import componenti delle pagine
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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
