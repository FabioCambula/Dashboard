# 🌞 Solar Dashboard - Vue.js Project

Una dashboard realizzata con **Vue.js** per monitorare l'efficienza energetica dei pannelli solari, visualizzare le condizioni meteo e i log di sistema.

## 🚀 Demo

🔗 [Visualizza il progetto online](https://fabiocambula.github.io/Dashboard)

## 🧩 Funzionalità

- 🌡 **Visualizzazione meteo**: recupero e visualizzazione in tempo reale delle condizioni meteorologiche attuali.
- ⚙️ **Log di sistema**: elenco aggiornato degli eventi di sistema.
- 🔋 **Produzione solare**: rappresentazione dei dati relativi all'energia prodotta dai pannelli solari.
- 📱 **Design responsive**: interfaccia adattabile a dispositivi mobile e desktop.
- 🧭 **Navigazione con Vue Router**: gestione delle pagine tramite SPA (Single Page Application).
- 🛠 **Deploy su GitHub Pages**: l'app è pubblicata ed accessibile da qualsiasi dispositivo connesso a internet.

## 🛠️ Tecnologie utilizzate

- **HTML** – Struttura dell'applicazione  
- **CSS / Bootstrap** – Stile e impaginazione responsive  
- **JavaScript**  
- **Vue.js** – Framework JavaScript principale  
- **Vue Router** – Navigazione tra componenti senza ricaricare la pagina  
- **Axios** – Per effettuare richieste HTTP verso le API  
- **Git** – Versionamento del codice  
- **GitHub Pages** – Hosting statico del progetto  
- **Favicon personalizzata** – Per dare identità al progetto  
- **OpenGraph** – Per migliorare la condivisione sui social  

## 📁 Struttura dei componenti

- `App.vue`: componente principale, gestisce il layout globale.
- `EnergyBox.vue`: visualizza la produzione di energia.
- `WeatherBox.vue`: mostra le condizioni meteo.
- `LogBox.vue`: elenca i log di sistema.

## 💡 Motivazioni tecniche

La separazione dei componenti riflette il principio di **responsabilità singola**: ogni componente ha un compito specifico, facilitando la manutenzione e l'estensione dell'app.  
La navigazione tramite Vue Router consente una UX fluida e reattiva, senza ricaricamenti di pagina.

## 🧠 Sfide affrontate

La sfida principale è stata creare un’interfaccia moderna e user-friendly, armonizzando componenti con dimensioni e comportamenti differenti. Dopo diverse iterazioni, sono riuscito a raggiungere un equilibrio tra design e funzionalità.

## 💻 Come eseguire il progetto localmente

### 1. Clona il repository

```bash
git clone https://github.com/fabiocambula/Dashboard.git
cd Dashboard

## 📜 Licenza

Questo progetto è stato realizzato a scopo didattico e non è destinato alla distribuzione o riutilizzo commerciale.
