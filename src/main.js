import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
//import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/main.css';
import GlobalComponents from './globalComponents';
//import GlobalDirectives from './globalDirectives';
// import Notifications from './components/NotificationPlugin';
// import MaterialDashboard from './material-dashboard';

const app = createApp(App);

// Use plugins
app.use(router);
// app.use(Antd);
//app.use(store);

// Use global components
app.use(GlobalComponents);

//app.use(GlobalDirectives);
// app.use(MaterialDashboard);
// app.use(Notifications);

// Set Authenticated flag
if (localStorage.getItem('isAuthenticated') === null) {
  localStorage.setItem('isAuthenticated', 'false');
}

// Mount the app
app.mount('#app');
