<template>
  <div class="detailbox">
    <label>Corporate Name</label>
    <input type="text" readonly />

    <label>Survey Name</label>
    <input type="text" readonly />

    <div class="h-item">
      <div class="item">
        <label>Survey Start</label>
        <input type="text" readonly />
      </div>

      <div class="item">
        <label>Survey End</label>
        <input type="text" readonly />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style scoped>
@font-face {
  font-family: fontfont;
  src: url(/src/assets/fonts/Carnac/CarnacLight.ttf);
}

* {
  font-family: fontfont;
}

.detailbox {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  background-color: white;
  padding: 30px 30px 60px 20px;
  border-radius: 15px;
  box-shadow: 1px 1px 5px #888888;
}

label {
  margin-left: 20px;
}

.detailbox > input {
  background-color: #f2eeee;
  height: 40px;
  cursor: default;
  border: none;
  margin: 2px 20px 15px 20px;
}

.item > input {
  background-color: #f2eeee;
  height: 40px;
  cursor: default;
  border: none;
  margin: 2px 20px;
}

.item {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.h-item {
  display: flex;
}

</style>
