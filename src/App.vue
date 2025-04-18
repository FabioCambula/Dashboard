<template>
  <b-container fluid id="app">
    <!-- immagine -->
    <b-row class="h-100">
      <b-col cols="12" lg="6" class="p-0 image">
        <header>
          <b-img
            :src="hotelImage"
            alt="Pannelli Fotovoltaici"
            class="header-image"
            fluid
          />
        </header>
      </b-col>
         <!--contenuto principale -->
      <b-col cols="12" lg="6" class="p-0 ">
        <main>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </main>
      </b-col>
    </b-row>

    <!-- Navbar -->
    <b-row>
      <b-col cols="12" class="mx-auto">
        <nav class="bottom-nav">
          <router-link to="/weather">
            <i class="fa-solid fa-sun"></i>
            Meteo
          </router-link>
          <router-link to="/solar">
            <i class="fa-solid fa-solar-panel"></i>
            Pannelli
          </router-link>
          <router-link to="/logs">
            <i class="fa-solid fa-comments"></i>
            Messaggi
          </router-link>
        </nav>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import hotelImage from "@/assets/hotel.png";
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: center;
}

.header-image {
  width: 100%;
  object-fit: cover;
}

main {
  position: relative;
  background-color: #f2f2f550;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
/* Navbar */
.bottom-nav {
  position: fixed;
  bottom: 0;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 90px;
  padding: 1rem;
  background: aliceblue;
  border-radius: 40px 40px 0 0;
  display: flex;
  justify-content: space-around;
}

.bottom-nav a {
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: #4caf50;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
}

.bottom-nav a i {
  margin-bottom: 0.5rem;
}

.bottom-nav a:hover {
  text-decoration: underline;
}

.bottom-nav a.router-link-active {
  color: #4caf50;
  text-shadow: 0 0 10px #96f39a, 0 0 20px #4caf50, 0 0 30px #101b11;
  transform: scale(1.1);
  transition: transform 0.3s ease, text-shadow 0.3s ease;
}
/* mobile */
@media (max-width: 576px)  {
  .header-image {
    height: 100vh;
  }
  main {
    border-radius: 40px 40px 0 0;
    position: absolute;
    bottom: 3rem;
    left: 0;
    right: 0;
    height: 70vh;
    overflow-y:scroll;
  }
}

/* tablet, visualizzazione simile mobile */
@media (min-width: 576px) and (max-width:1025px)  {
  main {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 75vh;
    padding-bottom: 60vh;
    border-radius: 40px 40px 0 0;
    
  }
  .header-image{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0px;

  }
}
/* desktop */
@media (min-width: 1026px){
  #app{
    display: grid;
    background: radial-gradient(circle at center, #86c7f0cc, #5fada2a7 80%);
  }
  header{
    height: 100%;
    width: 45vw;
    padding-top: 1rem;
    left: 10vw;
  }
   main{
    height: 100%;
    overflow: hidden;
    border-radius: 0 50px 0 0;
    width: 45vw;
    margin-top: 1rem;
    
    padding-top: 20vh;
    
  }
  .header-image{
    border-radius: 50px 0 0 0;
    min-width: 50vh;
    width: 100vw;
  }
}
/* gestione overflow dispositivi mobile in landscape */
@media (max-width: 1000px) and (orientation: landscape) {
  main {
    overflow-y: auto;
  }
}
</style>
