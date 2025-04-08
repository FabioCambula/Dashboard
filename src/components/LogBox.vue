<template>
  <div>
    <h2>Log di Sistema</h2>
    <div v-if="logs.length">
      <ul>
        <li v-for="(log, index) in logs" :key="index">
          <strong>{{ log.date }} - {{ log.type }}:</strong> {{ log.text }}
        </li>
      </ul>
    </div>
    <div v-else>
      Caricamento log...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const logs = ref([]);

const fetchLogs = async () => {
  try {
    const response = await axios.get('https://ott-fogliata.github.io/vuejs-s2i-repository/solar-panels.json');
    logs.value = response.data.logs;
  } catch (error) {
    console.error('Errore nel recupero dei log:', error);
  }
};

onMounted(() => {
  fetchLogs();
});
</script>
<style scoped>
h2 {
  color: #4CAF50;
  font-size: 2rem;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #e0e0e0;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

strong {
  color: #333;
}
</style>