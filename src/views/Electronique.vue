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
      <div class="d-flex justify-content-between my-5">
        <img class="images" src="../assets/images/electronique/20220427_162255_01.jpg" alt="">
        <img class="images" src="../assets/images/electronique/20220428_084216.jpg" alt="">
      </div>
    </div>

    <h2 class="text-start my-5">FAQ</h2>

    <div class="accordion my-3" id="accordionExample">
      <div class="accordion-item my-1 shadow p-3 mb-5 bg-body rounded">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Compétences Développées
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Le programme aborde les compétences attendues sur les technologies majeures : PHP Laravel, HTML CSS , JavaScript, Java, graphisme, bases de données et réseaux, algorithmique… et les soft skills indispensables en entreprise.

            Les méthodes d’apprentissage « apprendre à apprendre » vous permettent de vous former en autonomie tout au long de votre carrière pour suivre les évolutions technologiques.
          </div>
        </div>
      </div>
      <div class="accordion-item my-1 shadow p-3 mb-5 bg-body rounded">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Méthodes Pédagogiques
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Le Campus adopte une approche par compétences, les modules de formation étant construits sur la base de compétences à acquérir : savoirs, savoir-faire, savoir-être, outils, méthodologies… Cette approche permet d’assurer une formation professionnalisante avec le développement de compétences opérationnelles correspondant aux exigences des métiers visés.

            Le modèle de pédagogie par projet mis en place dans les modules de formation permet de rendre les stagiaires acteurs de la formation et de l’apprentissage.
          </div>
        </div>
      </div>
      <div class="accordion-item my-1 shadow p-3 mb-5 bg-body rounded">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Modalités D’accès Et Pré-Requis
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Tous les candidats demandeurs d’emploi et intéressés par le numérique peuvent s’inscrire à la formation, sans prérequis obligatoire. Les critères de sélection sont basés sur :

            La motivation et le projet professionnel défini ;
            La capacité à travailler en équipe et la bienveillance ;
            La curiosité, l’autonomie et la créativité.
            Processus de sélection :

            Envoi d’une lettre de motivation et d’une vidéo pitch
            Méthode de Recrutement par Simulation
            Immersion dans un travail collaboratif non numérique (piscine de 3 à 4 jours)
            Les candidatures féminines sont largement encouragées !
          </div>
        </div>
      </div>
      <div class="accordion-item my-1 shadow p-3 mb-5 bg-body rounded">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Prix De La Formation
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Gratuit grâce aux partenaires financeurs de la formation et les fonds de financement de la formation.</strong>
          </div>
        </div>
      </div>
      <div class="accordion-item my-1 shadow p-3 mb-5 bg-body rounded">
        <h2 class="accordion-header" id="headingFive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Accessibilité Aux Personnes En Situation De Handicap
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            La formation est accessible aux personnes en situation de handicap, avec une adaptation possible du rythme pédagogique et des modalités d’évaluation.
 
            Nos campus sont accessibles en transport en commun et localisés à proximité de multiples lieux d’hébergement et de restauration.
          </div>
        </div>
      </div>
      <div class="accordion-item my-1 shadow p-3 mb-5 bg-body rounded">
        <h2 class="accordion-header" id="headingSix">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            Et Après ?
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            En emploi: la majorité de nos apprenants exerce le métier de technicien développeur à l’issue de la formation, en entreprise ou à leur compte.

            Poursuite d’études: la formation débouche sur un diplôme Bac+2 qui vous permettra de continuer vers une formation en Licence.
          </div>
        </div>
      </div>
      <div class="accordion-item my-1 shadow p-3 mb-5 bg-body rounded">
        <h2 class="accordion-header" id="headingSeven">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            Quelles sont les compétences enseignées ?
          </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, impedit saepe! Error, illum aut consectetur saepe labore sed unde exercitationem cumque impedit officiis corrupti aliquam dolore accusamus at amet tenetur?
            Ad quis impedit voluptatum odio esse assumenda repudiandae aspernatur, corrupti placeat, quos exercitationem beatae accusamus, necessitatibus repellendus porro laboriosam. Itaque reprehenderit magnam nam quas iste repellendus, nihil suscipit id beatae.
            Ipsam, enim, voluptate facere, quam quae distinctio assumenda similique quas qui nesciunt blanditiis autem ullam fugit tempora aliquid laboriosam accusamus iure cupiditate? Quibusdam corrupti ex harum, possimus officiis excepturi totam!
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between my-5">
      <router-link to="/home" class="btn btn-rose m-2"># INTERNET OF THINGS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg> 
      </router-link>
      <router-link to="/protocoles" class="btn btn-rose m-2"># PROTOCOLES DE COMMUNICATION <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
      </svg>
      </router-link>
    </div>
  </div>
</div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Electronique",
  data(){
    return{
      controlBlock: false
    }
  },
  methods: {
    displayBlock(){
      this.controlBlock = !this.controlBlock;
    },
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
  height: 350px;
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