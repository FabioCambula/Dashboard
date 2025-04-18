<template>
  <b-container class="py-4">
    <div v-if="solarData">
      <div class="card-container mx-auto">
        <!-- Prima riga -->
        <b-row class="justify-content-center">
          <b-col cols="12" md="6" class="mb-1">
            <b-card class="d-flex justify-content-between align-items-center shadow-sm p-3 card-value">
              <span class="fw-bold text-primary">Produzione attuale:</span>
              <span class="data-text mb-0">{{ solarData["power-production"] }} kW</span>
            </b-card>
          </b-col>

          <b-col cols="12" md="6" class="mb-1">
            <b-card class="d-flex justify-content-between align-items-center shadow-sm p-3 card-value">
              <span class="fw-bold text-info">Energia del mese:</span>
              <span class="data-text mb-0">{{ solarData["month-energy"] }} kWh</span>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col cols="12" md="6" class="mb-1">
            <b-card class="d-flex justify-content-between align-items-center shadow-sm p-3 card-value">
              <span class="fw-bold text-warning">Energia odierna:</span>
              <span class="data-text mb-0">{{ todayEnergy }} kWh</span>
            </b-card>
          </b-col>

          <b-col cols="12" md="6" class="mb-1">
            <b-card class="d-flex justify-content-between align-items-center shadow-sm p-3 card-value">
              <span class="fw-bold text-success">Tempo residuo:</span>
              <span class="data-text mb-0">{{ solarData["left-time-energy"] }} ore</span>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
    <div v-else class="text-center">
      Caricamento dati...
    </div>
  </b-container>
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
    /* incremento valore todayEnergy per simulare l'energia in ingresso */
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
.energy-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  padding-bottom: 2rem;
}

.card-value span {
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  
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
@media (min-width: 768px) {
  .card-value{
    margin-bottom: 1rem;
  }
  
}
</style>