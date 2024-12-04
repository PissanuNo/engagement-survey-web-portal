import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import SideBar from './components/HomePage/SideBar.vue';

const GlobalComponents = {
  install(Vue) {
    Vue.component('AppHeader', AppHeader);
    Vue.component('AppFooter', AppFooter);
    Vue.component('SideBar', SideBar);
  },
};

export default GlobalComponents;