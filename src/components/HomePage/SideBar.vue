<template>
  <div :class="['box-sidebar', { collapsed: isCollapsed }]">
    <div class="sidebar-header">
      <img src="/src/assets/images/bakertilly-logo.png" alt="Bakertilly" class="img-btcas" v-if="!isCollapsed" />
      <i 
        :class="['bi', isCollapsed ? 'bi bi-list' : 'bi-arrow-left-circle-fill']" 
        class="toggle-icon"
        @click="toggleSidebar"
      ></i>
    </div>
    <div class="item-sidebar">
      <h5 v-if="!isCollapsed">Home</h5>
      <p>
        <img src="/src/assets/icon/Category.svg" class="img-export" /> 
        <span v-if="!isCollapsed" class="menu-text">Dashboard</span>
      </p>
      <h5 v-if="!isCollapsed">Management</h5>
      <p>
        <i class="bi bi-building"></i> 
        <span v-if="!isCollapsed" class="menu-text">Corporate</span>
      </p>
      <p>
        <i class="bi bi-file-earmark-text"></i> 
        <span v-if="!isCollapsed" class="menu-text">Survey</span>
      </p>
      <p>
        <i class="bi bi-question-square"></i> 
        <span v-if="!isCollapsed" class="menu-text">Questionnaire</span>
      </p>
      <p>
        <i class="bi bi-person-fill"></i> 
        <span v-if="!isCollapsed" class="menu-text">User</span>
      </p>
      <p>
        <i class="bi bi-database"></i> 
        <span v-if="!isCollapsed" class="menu-text">MasterData</span>
      </p>
      <h5 v-if="!isCollapsed">Report</h5>
      <p>
        <i class="bi bi-file-bar-graph"></i> 
        <span v-if="!isCollapsed" class="menu-text">Dashboard</span>
      </p>
      <p>
        <img src="/src/assets/icon/Union1.svg" class="img-export" /> 
        <span v-if="!isCollapsed" class="menu-text">Export/Import</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SideBar',
  setup() {
    const isCollapsed = ref(false); 

    const toggleSidebar = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    return {
      isCollapsed,
      toggleSidebar,
    };
  },
};
</script>

<style scoped>
.box-sidebar {
  width: 250px; 
  background-color: #ffffff; 
  padding: 20px; 
  display: flex;
  flex-direction: column;
  align-items: start; 
  height: 100vh; 
  transition: width 0.5s ease, padding 0.5s ease; 
  overflow: hidden;
}

.collapsed {
  width: 80px; 
  padding: 20px 10px; 
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px; 
}

.toggle-icon {
  font-size: 28px;
  cursor: pointer;
  margin-left: 0;
  color:#00BAB3;
}

.img-btcas {
  width: 150px;
  height: 40px;
  transition: opacity 0.5s ease; 
}

.item-sidebar h5 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #adb5bd;
  font-weight: bold;
  transition: opacity 0.5s ease; 
}

.item-sidebar p {
  margin: 8px 0;
  font-size: 20px;
  color: #adb5bd;
  display: flex;
  align-items: center;
  cursor: pointer; 
  transition: opacity 0.5s ease; 
}

.item-sidebar p i {
  margin-right: 10px; 
  font-size: 22px; 
}

.img-export {
  width: 22px;
  height: 22px;
  margin-right: 8px; 
}

.item-sidebar p:hover {
  color: #007bff; 
}

.menu-text {
  transition: opacity 0.5s ease;
}
</style>
