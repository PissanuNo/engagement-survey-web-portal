<template>
  <div class="background"></div>
</template>

<script>
export default {
  name: "WhiteBackground",
};
</script>

<style scoped>
.background {
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url("/src/assets/images/WhiteBackground.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -9999;
}
</style>
