<template>
  <div class="boxoverall">
    <Doughnut
      v-if="loaded"
      :data="chartData"
      :options="{ maintainAspectRatio: false }"
    />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { onMounted, ref } from "vue";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "OverAll",
  components: {
    Doughnut,
  },
  setup() {
    const chartData = ref();
    const loaded = ref(false);

    onMounted(async () => {
        try {
          let response = await fetch("/data/data.json");
          chartData.value = await response.json();
          loaded.value = true;
        } catch (error) {
          console.error(error);
        }
    });
    return { chartData, loaded };
  },
}
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

.boxoverall {
  width: 100%;
  max-height:320px;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 1px 1px 5px #888888;
}
</style>
