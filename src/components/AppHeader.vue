<template>
  <div class="box-header ">
    <div class="box-profile">
      <div class="detail-profile">
        <h4> 
          <i class="bi bi-bell-fill icon-noti"></i>
          <img :src=" imgProfile "  class="img-profile" /> 
            Austin Robertson 
          <p class="p">Marketing Administrator</p> 
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AppHeader',
  setup() {
    const imgProfile = ref('/src/assets/images/TestProfile.png'); // Define the image path
    
    return {
      imgProfile,
    };
  },
};
</script>

<style scoped>
.box-header {
  position: fixed;
  top: 0;
  right: 0;
  background: rgb(255, 255, 255);
  height: 76px;
  width: 1414px;
}

.box-profile {
  position: absolute;
  top: 0;
  right: 1%;
  height: 70px;
  width: 300px;

}
.detail-profile{
  display: flex;
  text-align: center;
  padding-top: 15px;
} 
.p {
  font-size: 16px;
  padding-left: 4vw;
}
.img-profile{
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid black;
}
.icon-noti{
  padding-right: 15px ;
}

</style>
