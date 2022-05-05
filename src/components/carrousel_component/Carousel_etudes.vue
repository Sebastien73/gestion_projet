<template>
  <div class="container">
    <div class="row vh-100 justify-content-center">
      <div id="myCarousel" class="carousel slide mt-5" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../assets/images_carrousel_etude/IMG01.jpg" alt="IoT_1" class="d-block">
          </div>

          <div class="carousel-item">
            <img src="../../assets/images_carrousel_etude/IMG02.jpg" alt="IoT_2" class="d-block">
          </div>

          <div class="carousel-item">
            <img src="../../assets/images_carrousel_etude/IMG03.jpg" alt="IoT_3" class="d-block">
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Carousel_etudes",
}
</script>

<style scoped>
#myCarousel{
  width: 75%;
  height: 100%;
}
.carousel-inner{
  width: 100%;
  height: 75vh;
}
.d-block{
  width: 100%;
  height: 70vh;
}
.carousel-control-next-icon, .carousel-control-prev-icon{
  background-color: #EF2961;
  border-radius: 35%;
}
h4{
  text-decoration: underline;
  text-decoration-color: #EF2961;
}

/* MOBILE PORTRAIT */
@media (min-width: 300px) and (max-width: 767px) and (orientation: portrait){
  .carousel-inner{
    height: 50vh;
  }
  .d-block{
    width: auto;
    height: 30vh;
  }
  .carousel-control-next,.carousel-control-prev, .carousel-control-next:focus, .carousel-control-next:hover, .carousel-control-prev:focus, .carousel-control-prev:hover{
    display: none;
  }
}
/* MOBILE LANDSCAPE */
@media (min-width: 767px) and (max-width: 1080px) and (orientation: landscape){
  .carousel-inner{
    width: 100%;
    height: 70vh;
  }
  .d-block{
    height: 100vh;
  }
  .carousel-control-next,.carousel-control-prev, .carousel-control-next:focus, .carousel-control-next:hover, .carousel-control-prev:focus, .carousel-control-prev:hover{
    display: none;
  }
}

/* TABLETTE PORTRAIT */
@media (min-width: 767px) and (max-width: 1080px) and (orientation: portrait){
  .carousel-inner{
    width: 100%;
    height: 50vh;
  }
  .d-block{
    height: 40vh;
  }
  .carousel-control-next,.carousel-control-prev, .carousel-control-next:focus, .carousel-control-next:hover, .carousel-control-prev:focus, .carousel-control-prev:hover{
    display: none;
  }
}

/* TABLETTE LANDSCAPE */
@media (min-width: 1080px) and (orientation: landscape){
  .carousel-inner{
    width: 100%;
    height: 100vh;
  }
  .d-block{
    height: 70vh;
  }
}
</style>