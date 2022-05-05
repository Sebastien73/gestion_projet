<script>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name: "Footer",
    // components: {Navbar},
}

</script>

<template>
<div class="bg-black py-3">
    <!-- <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3> -->
  <div class="w-50 mx-auto">
    <h2 class="text-white text-uppercase text-center">restons en contact</h2>
    <p class="text-white text-center">Pour connaitre toutes les dernières nouvelles du campus et ne rien rater de nos prochaines formations et événements. Inscrivez-vous à la newsletter</p>
  </div>
  <div class="mb-3 w-50 mx-auto">
    <form class="input-append d-flex flex-row">
        <input type="email" class="form-control bg-secondary border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
        <!-- <button type="submit" class="btn btn-danger text-white text-uppercase pull-right border-0">s'inscrire &#x2709;</button> -->
        <button type="submit" class="btn btn-danger text-white text-uppercase pull-right border-0">s'inscrire</button>
    </form>
  </div>
  <div >
    <div class="bg-secondary d-flex flex-row justify-content-evenly py-3">
      <div>
        <img src="../images/logo-campus-header.png" class="rounded mx-auto d-block" alt="..." width="200px">
      </div>
      <div>
        <h3 class="text-white text-uppercase">nos campus</h3>
        <ul>
          <li>Annecy</li>
          <li>Chambéry</li>
          <li>Valence</li>
        </ul>
      </div>
      <div>
        <h3 class="text-white text-uppercase">nos formations</h3>
        <ul>
          <li>Technicien Développeur</li>
          <li>Formation Licence 3 Informatique</li>
          <li>Data +8</li>
          <li>Data Asperger</li>
          <li>Data Controller</li>
        </ul>
      </div>
      <div>
        <h3 class="text-white text-uppercase">charte qualité</h3>
        <button type="submit" class="btn btn-danger text-white text-uppercase pull-right border-0">&#128459; lire la charte</button>
      </div>
      <div>
        <img src="../images/logo-french-tech.png" class="rounded mx-auto d-block" alt="..." width="80px">
      </div> 
    </div> 
    <div class="d-flex flex-row justify-content-between bg-secondary">

      <!-- <div class="row row-cols-3 row-cols-lg-1 w-50 py-3"> -->
      <!-- <div class="row row-cols-3 w-50 py-3"> -->
      <div class="div_logos d-flex flex-row justify-content-between align-items-center py-3">
        <img src="../images/footer_datadock.png" id="img1" class="image rounded mx-auto" alt="...">
        <img src="../images/LogoQualiopi-Marianne-150dpi-31.jpg" id="img2" class="rounded mx-auto" alt="...">
        <img src="../images/logo-pix-couleur@3x.png" id="img3" class="rounded mx-auto" alt="...">
        <!-- <img src="./images/Logo-Region-Blanc-pastille-Bleue-PNG-RVB.png" class="rounded mx-auto d-block col-5" alt="..." width="80px"> -->
        <img src="../images/Logo-Region-Blanc-pastille-Bleue-PNG-RVB.png" id="img4" class="rounded mx-auto" alt="...">
      </div>
      <div class="logo_rs d-flex flex-row justify-content-center align-items-center">
         <img src="../images/linkedin.png" class="rounded mx-auto d-block" alt="..." height="25px">
         <img src="../images/facebook.png" class="rounded mx-auto d-block" alt="..." height="25px">
      </div>

    </div>
  </div>
  <div class="border-top border-light d-flex flex-row justify-content-evenly py-1 bg-secondary">
    <div class="footer_end text-uppercase text-white border-end border-light">
      <p>accueil</p>
      </div>
    <div class="footer_end text-uppercase text-white border-end border-light"><p>mentions légales</p></div>
    <div class="footer_end text-uppercase text-white"><p>contact</p></div>
    <div class="footer_end text-uppercase text-white border-start border-light"><p>titre rncp</p></div>
  </div>

</div>
    
</template>

<style scoped>

/* $red: #dc3545;

background-image: var(--bs-gradient);. */

body {
  min-width: 100%;
}

.btn-danger:hover {
  background: #3cd72e;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

li {
  list-style-type: none;
  color: #A8A8A8;
  margin-left: -32px;
}

li:hover {
    color: rgb(239, 41, 97);
}

.footer_end:hover > p{
  color: rgb(239, 41, 97);
}

.footer_end {
  width: 25%;
  /* border-color: #A8A8A8; */
  border-color: #ff0000;

}

.footer_end > p {
  text-align: center;
  height: 40px;
  line-height: 60px;
}

.image {
  border: 200px;
  align-self: center;
}

.div_logos {
  width: 500px;
  height: 100px;
}

.div_logos > img {
  padding: 10px;
}

#img1 {
  height: 60px;
  width: 60px;
}

#img2 {
  height: 80px;
}

#img3 {
  height: 70px;
}

#img4 {
  height: 60px;
}

.logo_rs {
  width: 100px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
