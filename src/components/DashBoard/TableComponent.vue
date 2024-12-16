<template>
  <div class="boxtable">
    <table>
      <tr>
        <th>Department</th>
        <th>Staff</th>
        <th>Response</th>
        <th>Response Rate(%)</th>
      </tr>
      <tr class="middle">
        <td ></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="total">Total</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
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

.boxtable {
  width: 100%;
  background-color: white;
  box-shadow: 1px 1px 5px #888888;
}

table {
  width: 100%;
}

th {
  border-bottom: 2px solid #ccc;
  border-left: 2px solid #ccc;
  font-family: fontbold;
  text-align: center;
}

td {
  font-family: fontlight;
  border-left: 2px solid #ccc;
}

tr + th,
tr + td {
  border-left: 0px;
}

.middle{
  height: 200px;
}

.total{
  font-family: fontbold;
  text-align: center;
}
</style>
