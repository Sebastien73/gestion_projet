<template>
  <div class="container">
    <div class="row vh-100 justify-content-center">
      <h1 class="mt-5 fw-bold ">INTERNET OF THINGS</h1>
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


      <Carrousel_hp />
    </div>
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
</style>