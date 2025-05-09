import { createRouter, createWebHashHistory } from "vue-router";
import EnergyBox from "../components/EnergyBox.vue";
import WeatherBox from "../components/WeatherBox.vue";
import LogBox from "../components/LogBox.vue";

const routes = [
  { path: "/", redirect: "/solar" },
  { path: "/solar", component: EnergyBox },
  { path: "/weather", component: WeatherBox },
  { path: "/logs", component: LogBox },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
