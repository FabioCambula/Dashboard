<template>
  <div class="dati">
    <h2>Dati Pannelli Fotovoltaici</h2>
    <div v-if="solarData" class="energy-cards">
      <div class="card">
        <p><strong>Produzione attuale:<br></strong> {{ solarData["power-production"] }} kW</p>
      </div>
      <div class="card">
        <p><strong>Energia del mese:<br></strong> {{ solarData["month-energy"] }} kWh</p>
      </div>
      <div class="card">
        <p><strong>Energia odierna:<br></strong> {{ todayEnergy }} kWh</p>
      </div>
      <div class="card">
        <p><strong>Tempo residuo:<br></strong> {{ solarData["left-time-energy"] }} ore</p>
      </div>
    </div>
    <div v-else>
      Caricamento dati...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';

const solarData = ref(null);
const todayEnergy = ref(0);
let intervalId = null;

const fetchData = async () => {
  try {
    const response = await axios.get('https://ott-fogliata.github.io/vuejs-s2i-repository/solar-panels.json');
    solarData.value = response.data;
    todayEnergy.value = solarData.value["today-energy"];
    intervalId = setInterval(() => {
      todayEnergy.value++;
    }, 1000);
  } catch (error) {
    console.error('Errore nel recupero dei dati dei pannelli:', error);
  }
};

onMounted(() => {
  fetchData();
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
body{
  z-index: 80;
  margin: 0 1rem;
  color: red;
}
h2 {
  font-size: 2rem;
  text-align: center;
  color: #4CAF50;
}
.energy-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  padding-bottom: 2rem;
}

.card {
  background: #ffff;
  padding: 2rem;
  border-radius: 30px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
}

.card p {
  margin: 0;
}
</style>