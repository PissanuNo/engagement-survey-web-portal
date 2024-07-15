import AppHeader from './components/AppHeader.vue';
const GlobalComponents = {
  install(Vue) {
    Vue.component('AppHeader', AppHeader);
  },
};

export default GlobalComponents;