
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
<template>
  <b-container class="py-4">
    <b-card
      header="Log di Sistema"
      header-bg-variant="info"
      header-text-variant="white"
      class="shadow-sm card-log"
    >
      <div v-if="logs.length" class="log-container">
        <div v-for="(log, index) in logs" :key="index" class="log-item">
          <p class="mb-0">
            <strong>{{ log.date }} - {{ log.type }}:</strong>
            {{ log.text }}
          </p>
        </div>
      </div>
      <div v-else class="text-center">
        Caricamento log...
      </div>
    </b-card>
  </b-container>
</template>

<style scoped>
.card-log{
  border-radius: 30px;
}
header{
  border-radius: 30px;
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
.log-container {
  overflow-y: hidden;
  margin-bottom: 2rem;
  padding-right: 0.5rem;
}
.log-item:not(:last-child) {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0px;
  margin-bottom: 1rem;
}
</style>