<template>
  <div class="meteo">
    <h2>Ragusa</h2>
    <div v-if="weatherData">
      <img class="meteo-img" :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`" alt="Icona meteo" />
      <p>Temperatura: {{ weatherData.main.temp }} °C</p>
      <p>Condizioni: {{ weatherData.weather[0].description }}</p>  
    </div>
    <div v-else>
      Caricamento dati meteo...
    </div>
  </div>
</template>

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

<style scoped>
.meteo{
  text-align: center;
}
.meteo-img {
  width: 50%;
  filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(180deg);
}

h2 {
  font-size: 2rem;
  color: #4CAF50;
}

p {
  font-size: 1.2rem;
}
</style>