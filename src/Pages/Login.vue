<template>
  <div class="mainLayout">
    <header>
      <AppHeader />
    </header>
    <main>
      <LoginForm />
    </main>
  </div>
</template>
  
<script>
import LoginForm from '../components/LoginForm.vue';
export default {
  name: 'Login',
  components: {
    LoginForm
  },
};
</script>