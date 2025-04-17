import { createRouter, createWebHistory } from "vue-router";
// Import componenti delle pagine
import EnergyBox from "../components/EnergyBox.vue";
import WeatherBox from "../components/WeatherBox.vue";
import LogBox from "../components/LogBox.vue";

const routes = [
  { path: "Dashboard/", redirect: "Dashboard/solar" },
  { path: "Dashboard/solar", component: EnergyBox },
  { path: "Dashboard/weather", component: WeatherBox },
  { path: "Dashboard/logs", component: LogBox },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
