<template>
<div class="container">
  <div class="row fin">
    <img src="" alt="">
    <h1 class="fw-bold ">PROTOCOLE DE COMMUNICATION</h1>
    <div class="d-flex justify-content-between">
      <div class="mt-5 mx-5">
        <h2>Protocole de communication</h2>
        <p class="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam dignissimos, earum rem eaque, illo possimus est neque voluptas architecto quo quibusdam hic distinctio maxime quisquam cupiditate sint repellendus illum.
          Doloribus debitis molestiae aspernatur blanditiis ipsa consequatur. Nostrum quam autem, eum repudiandae ullam officia, fugiat qui, deserunt a molestias optio nam consectetur. Blanditiis deleniti repellendus ex quam at eum numquam?
      </p>
      </div>
      <div class="d-flex justify-content-between my-5">
        <img class="images" src="../assets/images/protocole/LoRa03.jpg" alt="">
      </div>
    </div>

    <button class="btn btn-rose m-2" @click="displayBlock">Voir plus <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-right-circle" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"/>
    </svg>
    </button>

    <div v-if="controlBlock">
      <div class="d-flex justify-content-between my-5">
        <img class="images" src="../assets/images/electronique/20220427_162255_01.jpg" alt="">
        <img class="images" src="../assets/images/electronique/20220428_084216.jpg" alt="">
      </div>
    </div>


    <h2 class="text-start my-5">FAQ</h2>
    
    <Accordion_accordion />

    <div class="d-flex justify-content-between my-5">
      <router-link to="/electronique" class="btn btn-rose m-2" @click="scrollT"># ELECTRONIQUE <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg> 
      </router-link>
      <router-link to="/cas_etudes" class="btn btn-rose m-2" @click="scrollT"># CAS D'ETUDE IOT <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
      </svg>
      </router-link>
    </div>
  </div>
</div>

</template>

<script>
import Accordion_accordion from "@/components/accordion_component/Accordion_accordion";

export default {
  name: "Protocoles_comm",
  components: {
    Accordion_accordion,
  },
  data(){
    return{
      controlBlock: false
    }
  },
  methods: {
    displayBlock(){
      this.controlBlock = !this.controlBlock;
    },
    scrollT(){
      window.scroll(0,0);
    }
  }
}
</script>

<style scoped>

.fin {
  width: 80%;
  margin: auto;

}

h1 {
  margin-top: 10rem;
}

.images {
  height: 250px;
}

.btn {
  width: 200px;
}

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


</style>