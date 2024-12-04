<template>
  <div class="box-sec1">
    <div class="box-text">
        <h3 class="h2">Profile management</h3>
        <p class="p">Manages personal settings or configurations within a software application</p>
    </div>
  </div>
</template>

<script>
export default {
    name : 'TestSec1',
}
</script>

<style scoped>
.box-sec1 {
  height: 234px;
  width: 1840px;
  background-image: url(../../assets/images/green-fade-image.png);
  background-size: cover;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 50px;

}

.box-text {
  color: white;    
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