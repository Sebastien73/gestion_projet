<template>
  <div class="accordion my-3" id="accordionExample">
      <div class="accordion-item my-1 shadow p-3 mb-5 bg-body rounded">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Qu'est-ce que le cas d'étude IoT ?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam amet ipsam incidunt distinctio non quis nostrum iure numquam fugiat, veniam necessitatibus, nihil et? Ipsa eius accusamus a quaerat officia accusantium?
          </div>
        </div>
      </div>
      <div class="accordion-item my-1 shadow p-3 mb-5 bg-body rounded">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Quels étaient les projets proposés ?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam amet ipsam incidunt distinctio non quis nostrum iure numquam fugiat, veniam necessitatibus, nihil et? Ipsa eius accusamus a quaerat officia accusantium?
          </div>
        </div>
      </div>
      <div class="accordion-item my-1 shadow p-3 mb-5 bg-body rounded">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Avez-vous eu des difficultés ?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam amet ipsam incidunt distinctio non quis nostrum iure numquam fugiat, veniam necessitatibus, nihil et? Ipsa eius accusamus a quaerat officia accusantium?
          </div>
        </div>
      </div>
      <div class="accordion-item my-1 shadow p-3 mb-5 bg-body rounded">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Êtes-vous satisfait de votre projet ?
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam amet ipsam incidunt distinctio non quis nostrum iure numquam fugiat, veniam necessitatibus, nihil et? Ipsa eius accusamus a quaerat officia accusantium?</strong>
          </div>
        </div>
      </div>
      <div class="accordion-item my-1 shadow p-3 mb-5 bg-body rounded">
        <h2 class="accordion-header" id="headingFive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Quelles seraient vos recommandations ?
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam amet ipsam incidunt distinctio non quis nostrum iure numquam fugiat, veniam necessitatibus, nihil et? Ipsa eius accusamus a quaerat officia accusantium?
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
            Conseillez-vous cette formation ?
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

</template>

<script>
export default {
  name: "Accordion_etudes",
}
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  background-color:rgb(255, 255, 255);
  border-bottom: solid #ff0000;
  color: black;
}

.accordion-button:not(.collapsed)::after {

    background-image: url("../../assets/images/chevron-down-_1_.jpg");
    transform: rotate(-180deg);
    color: black !important;
}

.accordion-button:focus {
  box-shadow: none;
}

</style>