import AppHeader from './components/AppHeader.vue';
import MenuFrom from './components/MenuFrom.vue';

const GlobalComponents = {
  install(Vue) {
    Vue.component('AppHeader', AppHeader);
    Vue.component('MenuFrom', MenuFrom);
  },
};

export default GlobalComponents;