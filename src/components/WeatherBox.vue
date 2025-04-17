<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const weatherData = ref(null);

const fetchWeather = async () => {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: 'Ragusa,IT',
        appid: 'b0104f3440a3dd007ccf6dd5475dce2b',
        units: 'metric',
        lang: 'it'
      }
    });
    weatherData.value = response.data;
  } catch (error) {
    console.error('Errore nel recupero dei dati meteo:', error);
  }
};

onMounted(() => {
  fetchWeather();
});
</script>
<template>
  <b-container class="py-4">
    <div v-if="weatherData">
      <b-card header="Ragusa"
              header-bg-variant="info"
              header-text-variant="white"
              class="text-center shadow-sm card-weather">
        <b-img 
          :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`" 
          alt="Icona meteo" 
          class="meteo-icon"
          fluid
        />
        <div class="mt-3">
          <p class="mb-1">
            Temperatura: <strong>{{ weatherData.main.temp }} °C</strong>
          </p>
          <p class="mb-0">
            Condizioni: <strong>{{ weatherData.weather[0].description }}</strong>
          </p>
        </div>
      </b-card>
    </div>
    <div v-else class="text-center">
      Caricamento dati meteo...
    </div>
  </b-container>
</template>

<style scoped>
.meteo{
  text-align: center;
}
/* colore per le icone meteo */
.meteo-icon {
  filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(180deg);
}
.card-weather{
  border-radius: 30px;
}
p {
  font-size: 1.2rem;
}
</style>