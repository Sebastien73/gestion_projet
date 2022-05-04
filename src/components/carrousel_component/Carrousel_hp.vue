<template>
<div class="container">
  <div class="row vh-100 justify-content-center">
    <div id="myCarousel" class="carousel slide mt-5" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../assets/images_carrousel_hp/IMG01.jpg" alt="IoT_1" class="d-block">
          <div class="carousel-caption">
            <h4>TITRE ICI</h4>
          </div>
        </div>

        <div class="carousel-item">
          <img src="../../assets/images_carrousel_hp/IMG02.jpg" alt="IoT_2" class="d-block">
          <div class="carousel-caption">
            <h4>TITRE ICI</h4>
          </div>
        </div>

        <div class="carousel-item">
          <img src="../../assets/images_carrousel_hp/IMG03.jpg" alt="IoT_3" class="d-block">
          <div class="carousel-caption">
            <h4>TITRE ICI</h4>
          </div>
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
  name: "Carrousel_hp",
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
@media (min-width: 300px) and (max-width: 767px) {
  .carousel-inner{
    height: 50vh;
  }
  .d-block{
    height: 45vh;
  }
}
</style>