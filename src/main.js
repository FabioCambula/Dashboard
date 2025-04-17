import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

// Importa i CSS di Bootstrap e BootstrapVue3
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// Importa BootstrapVue3 e usalo nell'app
import BootstrapVue3 from "bootstrap-vue-3";

const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
app.mount("#app");
