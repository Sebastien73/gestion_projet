<template>
  <div class="container">
    <div class="row">
      <h1 class="fw-bold">INTERNET OF THINGS</h1>
      <p class="mt-3"><strong>
        Learning Lab à l’IUT de Chambéry pour apprendre
      </strong><br>
        Vous développerez des compétences en IoT grâce à trois modules au Learning Lab de l’IUT de Chambéry.
      </p>
      <div>
        <h2 class="fw-bold fst-italic mt-3">Découvrez nos 3 modules : </h2>
        <router-link to="/electronique" class="btn btn-rose m-2"># ELECTRONIQUE <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
        </router-link>
        <br>
        <router-link to="/protocoles" class="btn btn-rose m-2"># PROTOCOLES DE COMMUNICATION <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
        </router-link>
        <br>
        <router-link to="/cas_etudes" class="btn btn-rose m-2"># CAS D'ETUDE IOT <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
        </router-link>
      </div>
      <div class="mt-5">
        <iframe width="1264" height="711" src="https://www.youtube.com/embed/cPCuvNZW53E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="container">
        <div class="row">
          <div class="col align_left m-3">
            <p class="fw-bold">Objectif et démarche pédagogiques :</p>
            <ul><u>Découverte et identification du matériel :</u>
              <li>La carte programmable (Arduino Uno mais aussi les autres).</li>
              <li>Les capteurs</li>
              <li>Les effecteurs ou actionneurs</li>
              <li>La connectique</li>
              <li>Orchestration des différents éléments : montage (schéma + réalisation)</li>
              <li>Du hardware au software : créer (concevoir et réaliser) son premier objet connecté</li>
            </ul>

            <ul><u>Compétences :</u>
              <li>Afficher des données issues d’un capteur Arduino</li>
              <li>Connecter un capteur Arduino</li>
              <li>Réaliser une maquette</li>
              <li>Connecter une carte et un capteur Arduino à un réseau Wifi</li>
              <li>Programmer un effecteur et un petit objet</li>
              <li>Debugger un dysfonctionnement</li>
              <li>Utiliser un composant complexe</li>
            </ul>
          </div>
          <div class="col">
            <img src="../assets/images/arduino.png" alt="arduino">
          </div>
        </div>
      </div>
      <div class="mt-5 text-decoration-underline">
        <p>Vous développerez ces compétences grâce à <strong>trois modules</strong> au Learning Lab de l’IUT de Chambéry.</p>
      </div>
      <div class="container mt-5 shadow c-border">
        <div class="row ">
          <div class="col m-3">
            <p class="p-rose">13 Jours</p>
            <p>ELECTRONIQUE</p>
          </div>
          <div class="col m-3">
            <p class="p-rose">5 Jours</p>
            <p>PROTOCOLES DE COMMUNICATION</p>
          </div>
          <div class="col m-3">
            <p class="p-rose">10 Jours</p>
            <p>CAS D'ETUDE IOT</p>
          </div>
        </div>
      </div>
    </div>
    <Carrousel_hp />
  </div>

</template>

<script>
// @ is an alias to /src
import Carrousel_hp from "@/components/carrousel_component/Carrousel_hp";

export default {
  name: 'HomeIoT',
  components: {
    Carrousel_hp,
  }
}
</script>
<style scoped>
.btn-rose{
  background-color: #EF2961;
  color: #ffffff;
}
.btn-rose:hover{
  background-color: #211b19;
  color: #EF2961;
}
.p-rose{
  color: #EF2961;
  font-size: 25px;
}
.c-border{
  border-radius: 0 50px 0 50px;
}
.align_left{
  text-align: left;
}
h1{
  margin-top: 10rem;
}
</style>