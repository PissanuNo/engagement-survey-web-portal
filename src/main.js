import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import GlobalComponents from './globalComponents'
import router from './router';
import './assets/main.css';


const app = createApp(App);

// Use plugins
app.use(router);
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


app.mount('#app')
