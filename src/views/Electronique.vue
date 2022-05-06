<template>
<div class="container">
  <div class="row fin">
    <img src="" alt="">
    <h1 class="fw-bold ">ELECTRONIQUE</h1>

    <p class="mt-3"><strong>
        Learning Lab à l’IUT de Chambéry pour apprendre
      </strong><br>
        Vous développerez des compétences en IoT grâce à trois modules au Learning Lab de l’IUT de Chambéry.
    </p>
    <div class="d-flex justify-content-between my-5">
      <img class="images" src="../assets/images/electronique/20220427_162255_01.jpg" alt="">
      <img class="images" src="../assets/images/electronique/20220428_084216.jpg" alt="">
    </div>
    <div class="my-3">
      <h2 class="text-start my-5">Electronique</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptatibus cupiditate animi quasi aperiam illum, impedit veritatis est explicabo blanditiis asperiores nam, sapiente iusto quisquam magni, quidem provident vitae quae!
      Distinctio quidem autem, corrupti nam dignissimos in cupiditate accusamus quos nulla. Quibusdam culpa animi, quod, modi debitis ut dolorum, dicta aspernatur praesentium numquam excepturi a veritatis iste ab odio impedit?
      Aliquid, nostrum officia sed recusandae eum nesciunt tenetur, praesentium enim tempora corrupti omnis nisi, facilis voluptatum. Error animi accusamus culpa reiciendis ex dolor ab atque deserunt repudiandae dolorem. Autem, odio.
      Debitis incidunt cumque sit eaque eos. Voluptate voluptatem, quas maxime quos laboriosam officia veniam eius sed itaque veritatis, suscipit odit? Molestiae ipsum quis expedita perspiciatis, ab aspernatur sint dicta sit.
      Eius tempore eum obcaecati voluptatum ipsa culpa. Quaerat dolorum placeat non error! Beatae delectus tempora autem molestias libero, ducimus omnis qui, reprehenderit assumenda recusandae quaerat. Repellendus repellat aliquid aspernatur! Quo?</p>
    </div>

    <button class="btn btn-rose m-2" @click="displayBlock">Voir plus <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-right-circle" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"/>
    </svg>
    </button>

    <div v-if="controlBlock">
      <div class="container">
        <div class="row">
          <div class="col">
            <img class="images2" src="../assets/images/electronique/20220427_162255_01.jpg" alt="electronique1">
          </div>
          <div class="col">
            <img class="images2" src="../assets/images/electronique/20220427_162255_02.jpg" alt="electronique2">
          </div>
        </div>

        <div class="row mt-2">
          <div class="col">
            <img class="images2" src="../assets/images/electronique/20220427_162255_03.jpg" alt="electronique3">
          </div>
          <div class="col">
            <img class="images2" src="../assets/images/electronique/20220427_162255_04.jpg" alt="electronique4">
          </div>
        </div>

        <div class="row mt-2">
          <div class="col">
            <img class="images2" src="../assets/images/electronique/20220427_162317_01.jpg" alt="electronique5">
          </div>
          <div class="col">
            <img class="images2" src="../assets/images/electronique/20220427_162317_02.jpg" alt="electronique6">
          </div>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col">
          <img class="images2" src="../assets/images/electronique/20220427_162317_03.jpg" alt="electronique7">
        </div>
        <div class="col">
          <img class="images2" src="../assets/images/electronique/20220427_162317_05.jpg" alt="electronique8">
        </div>
      </div>

      <div class="row mt-2">
        <div class="col">
          <img class="images2" src="../assets/images/electronique/20220427_162346.jpg" alt="electronique9">
        </div>
        <div class="col">
          <img class="images2" src="../assets/images/electronique/20220427_162449.jpg" alt="electronique10">
        </div>
      </div>

      <div class="row mt-2">
        <div class="col">
          <img class="images2" src="../assets/images/electronique/20220427_162458.jpg" alt="electronique11">
        </div>
        <div class="col">
          <img class="images2" src="../assets/images/electronique/20220427_162550.jpg" alt="electronique12">
        </div>
      </div>

      <div class="row mt-2">
        <div class="col">
          <img class="images2" src="../assets/images/electronique/20220427_162623.jpg" alt="electronique13">
        </div>
        <div class="col">
          <img class="images2" src="../assets/images/electronique/20220427_162642.jpg" alt="electronique14">
        </div>
      </div>

      <div class="row mt-2">
        <div class="col">
          <img class="images2" src="../assets/images/electronique/20220428_084132.jpg" alt="electronique15">
        </div>
        <div class="col">
          <img class="images2" src="../assets/images/electronique/20220428_084152.jpg" alt="electronique16">
        </div>
      </div>

      <div class="row mt-2">
        <div class="col">
          <img class="images2" src="../assets/images/electronique/20220428_084203.jpg" alt="electronique17">
        </div>
        <div class="col">
          <img class="images2" src="../assets/images/electronique/20220428_084216.jpg" alt="electronique18">
        </div>
      </div>

      <div class="row mt-2">
        <div class="col">
          <img class="images2" src="../assets/images/electronique/electronique04.jpg" alt="electronique19">
        </div>
        <div class="col">
          <img class="images2" src="../assets/images/electronique/electronique05.jpg" alt="electronique20">
        </div>
      </div>

      <div class="row mt-2">
        <div class="col">
          <img class="images2" src="../assets/images/electronique/electronique06.webp" alt="electronique21">
        </div>
        <div class="col">
          <img class="images2" src="../assets/images/electronique/electronique07.jpg" alt="electronique22">
        </div>
      </div>

      <div class="row mt-2 justify-content-center">
        <img class="images2" src="../assets/images/electronique/electronique08.jpg" alt="electronique23">
      </div>
    </div>

    <h2 class="text-start my-5">FAQ</h2>

    <Accordion_accordion />
    
    <div class="d-flex justify-content-between my-5">
      <router-link to="/home" class="btn btn-rose m-2" @click="scrollT"># INTERNET OF THINGS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg> 
      </router-link>
      <router-link to="/protocoles" class="btn btn-rose m-2" @click="scrollT"># PROTOCOLES DE COMMUNICATION <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Electronique",
  components: {
    Accordion_accordion
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

.images2 {
  width: 70%;
  height: 70%;
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