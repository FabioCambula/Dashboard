<template>
  <div class="container" id="app">
    <div class="row justify-content-center">
      <!-- Colonna per h2 e header -->
      <div class="col-10 mx-auto">
        <h2 class="hotel">Hotel Pomelia</h2>
        <header>
          <img src="https://www.sunballast.com/wp-content/uploads/2023/02/F02.JPG.jpeg" 
               alt="Pannelli Fotovoltaici" 
               class="header-image">
        </header>
      </div>

      <!-- Colonna per il main -->
      <div class="col-12">
        <main>
          <router-view />
        </main>
      </div>

      <!-- Colonna per la nav bar -->
      <div class="col-12 mx-auto">
        <nav class="bottom-nav">
          <router-link to="/solar">
            <i class="fa-solid fa-solar-panel"></i>
            Pannelli Solari
          </router-link>
          <router-link to="/weather">
            <i class="fa-solid fa-sun"></i>
            Meteo
          </router-link>
          <router-link to="/logs">
            <i class="fa-solid fa-comments"></i>
            Messaggi
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import WeatherBox from './components/WeatherBox.vue';
import EnergyBox from './components/EnergyBox.vue';
import LogBox from './components/LogBox.vue';
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  /* Centra verticalmente e orizzontalmente */
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, 
            #85d8f9 0%, 
            #b9e5f7 15%, 
            #ffffff 50%, 
            #ffffff 100%);
}

.hotel {
  text-align: center;
  color: #201f1fcd;
}

header {
  display: flex;
  justify-content: center;
}

header .header-image {
  border-radius: 30px;
  width: 80%;
  max-height: 250px;
  max-width: 400px;
  height: auto;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
}

main {
  display: flex;
  padding: 1rem;
  padding-bottom: 200px;
  /* background-color: #eeeded64; */
  background-color: a#01043bd9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
}

.bottom-nav {
  display: flex;
  justify-content: space-around;
  background: aliceblue;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 91.8vw;
  border-radius: 50px;
}

.bottom-nav a {
  text-decoration: none;
  color: #4CAF50;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bottom-nav a i {
  margin-bottom: 0.5rem;
}

.bottom-nav a:hover {
  text-decoration: underline;
}
</style>
