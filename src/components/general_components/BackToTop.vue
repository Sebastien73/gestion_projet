<template>
  <a @click="scrollTop" v-show="visible">
    <button  type="button" id="btn-to-top" class="btn btn-outline-light p-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
      </svg>
    </button>
  </a>
</template>

<script>
export default {
  name: "BackToTop",
  data () {
    return {
      visible: false
    }
  },
  methods:{
    scrollTop() {
      window.scroll(0, 0)
    },
    animationButton() {
      this.visible = window.scrollY > 150
    }
  },
  mounted() {
    window.addEventListener('scroll', this.animationButton)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.animationButton)
  }
}
</script>

<style scoped>
#btn-to-top{
  position: fixed;
  background-color: black;
  bottom: 80px;
  right: 20px;
  border-radius: 100%;
  height: 45px;
  width:45px;
}
#btn-to-top:hover{
  color: white;
}
</style>