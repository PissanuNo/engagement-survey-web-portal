<template>
  <header class="container-fluid">
      <img src="../assets/bakertilly-logo.png" alt="logo" @click="handleChange"/>
  </header> 
  <div class="porfile-logo"> 
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

  export default {
    name: 'AppHeader',
    setup() {
      const router = useRouter();

      const handleChange = () => {
        router.push('/')
      };
      return {
        handleChange,
      };
    },
  };
</script>

<style scoped>
  .container-fluid {
    display: flex;
    /* justify-content: start; */
    padding: 0 5% 0 5%;
    height: 50%;
    align-items: center;
    background-color: rgb(99, 219, 97);
  }

  .container-fluid img{
    max-height: 80%;
    width: auto;
    cursor: pointer;
  }

</style>
