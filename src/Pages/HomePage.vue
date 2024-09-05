<template>
  <div class="mainLayout">
    <header>
      <AppHeader />
      <SideBar/>
    </header>
  </div>
</template>

<script>
import SideBar from '../components/HomePage/SideBar.vue';
export default {
  name: "Menu",
  components :{
    SideBar
  } 
};
</script>
