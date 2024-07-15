<template>
  <div class="mainLayout">
    <header>
      <AppHeader />
    </header>
    <main>
      <ErrorForm :error_status="error_status" :error_message="error_message"/>
    </main>
  </div>
</template>

<script>
import ErrorForm from '../components/ErrorForm.vue';

export default {
  name: 'Error',
  components: {
    ErrorForm
  },
  props: ['error_status','error_message'],
};
</script>
