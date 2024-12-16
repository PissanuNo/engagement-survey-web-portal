<template>
  <div class="boxprogress">
    <div class="boxitem">
      <h6>Progress</h6>
      <h2>50%</h2>
      <p>160</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressComponent",
  setup(){
    
    return{

    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: fontlight;
  src: url(/src/assets/fonts/Carnac/CarnacLight.ttf);
}

@font-face {
  font-family: fontbold;
  src: url(/src/assets/fonts/Carnac/CarnacBold.ttf);
}

.boxprogress {
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: right;
  background-color: white;
  padding: 25px;
  padding-top: 35px;
  box-shadow: 1px 1px 2px #888888;
  border-radius: 10px;
  height: 120px;
}

h6, p {
  font-family: fontlight;
  color: lightslategray;
}


h2 {
  font-family: fontbold;
}
</style>
