<template>
  <div class="box-header ">
    <div class="box-profile">
      <div class="detail-profile">
          <!-- <i class="bi bi-bell-fill icon-noti"></i> -->
          <img :src=" imgNoti "  class="icon-noti" />
          <img :src=" imgProfile "  class="img-profile" /> 
          <div>
            <p class="name-p">Austin Robertson</p>
            <p class="job-p">Marketing Administrator</p>
          </div> 
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
    const imgNoti = ref('/src/assets/images/noti-icon.png');
    return {
      imgProfile,
      imgNoti,
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
  width: 100%;
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
.name-p {
  margin: 0;
  font-size: 20px;
  padding-left: 15px;
}
.job-p {
  color: gray;
  font-size: 14px;
  padding-left: 15px;
  margin: 0;
}
.img-profile{
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid gray;
}
.icon-noti{
  width: 53px;
  height: 55px;
  padding: 15px ;
}

</style>
