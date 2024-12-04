import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import SideBar from './components/HomePage/SideBar.vue';
// import TestSec1 from './components/test/TestSec1.vue';
import Bg from './components/test/Bg.vue';

const GlobalComponents = {
  install(Vue) {
    Vue.component('AppHeader', AppHeader);
    Vue.component('AppFooter', AppFooter);
    Vue.component('SideBar', SideBar);
    // Vue.component('TestSec1', TestSec1);
    Vue.component('Bg', Bg);
  },
};

export default GlobalComponents;