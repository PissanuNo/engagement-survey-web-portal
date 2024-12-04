<template>
  <div class="box-sec1">
    <div class="box-text">
        <h2 class="h2">Profile management</h2>
        <p class="p">Manages personal settings or configurations within a software application</p>
    </div>
  </div>
</template>

<script>
export default {
    name : 'TestSec1'
}
</script>

<style scoped>
.box-sec1 {
  position: fixed;
  top: 100px;
  left: 250px;
  right:0;
  height: 76px;
  width: 1670px;
}

.box-text {
  color: white;
  background: rgb(0, 194, 33);
  margin: 0;
  padding: 2%;
  padding-bottom: 3%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-image: linear-gradient(to left, rgb(11, 206, 11) , rgb(53, 221, 75) , rgb(51, 255, 20) , rgb(72, 255, 0));
}

.h2{
  font-family: inter;
  font-size: 40;
  font-weight: bold;
}

.p{
  font-family: inter;
}
</style>