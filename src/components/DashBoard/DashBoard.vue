<template>
  <div class="dashboardpage">
    <div class="boxdashboard">
      <h1 class="item0">Response Rate</h1>
      <div class="item1">
        <label>Detail</label>
        <Detail />
      </div>
      <div class="item2">
        <label>Over all</label>
        <OverAll />
      </div>
      <div class="item3">
        <label>Progress</label>
        <div class="initem3">
          <ProgressComponent class="progress" v-for="() in 3" />
        </div>
      </div>
      <div class="emptyitem"></div>
      <div class="item4">
        <TableComponent />
      </div>
    </div>
  </div>   
  <WhiteBackground class="background"/>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import Detail from "./Detail.vue";
import OverAll from "./OverAll.vue";
import ProgressComponent from "./ProgressComponent.vue";
import TableComponent from "./TableComponent.vue";
import WhiteBackground from "../globalComponents/WhiteBackground.vue";

export default {
  name: "DashBoard",
  components: {
    Detail,
    OverAll,
    ProgressComponent,
    TableComponent,
    WhiteBackground,
  },
  setup(){
    const data = ref('');
    const op = ref('');
    const call = async() =>{
      try{
        const response = await axios.get('https://meowfacts.herokuapp.com/');
        data.value = response.data.fact;
        op.value= data.value;
        console.log(op.value);
      }catch(error){
        console.log(error);
      }
    };

    onMounted( () => {
      call();
    })

    return{
      data
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: fontbold;
  src: url(/src/assets/fonts/Carnac/CarnacBold.ttf);
}

* {
  font-family: fontbold;
}

.background{
  position: absolute;
  top: 0;
  left: 0;
}

.dashboardpage {
  /* position: relative; */
}

.boxdashboard {
  padding: 50px;
  /* position: absolute;
  left: 0;
  top: 0; */
  width: 100%;
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;

}

.initem3 {
  display: grid;
  gap: 35px;
}

.item4 {
  margin-top: 20px;
}

@media screen and (min-width: 769px) {
  .boxdashboard {
    grid-template-columns: 65% 35%;
    grid-template-rows: auto auto auto auto auto;
  }
  .item0 {
    grid-column: 1/3;
  }
}

@media screen and (max-width: 768px) {
  .boxdashboard {
    grid-template-columns: 100%;
  }
}

@media screen and (min-width: 431px) {
  .initem3 {
    grid-template-columns: auto auto auto;
  }
}
</style>
