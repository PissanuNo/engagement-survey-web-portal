<template>
  <div class="background"></div> 
</template>

<script>
console.log("555");
export default {
    name : "Background"
    

}
</script>

<style scoped>


@media only screen and (min-width: 769px){
  .background {
      height: 100vh;
      width: 100%;
      position: fixed;
      background-image: url('/src/assets/images/bakertilly-bg.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -9999;
  }
}
</style>