<template>
    <div>
        <section>
            <Background/>
            <Signin/>
        </section>
  </div>

</template>

<script>
import Background from '../components/globalComponents/Background.vue';
import Signin from '../components/SignIn/Signin.vue';
export default {
    name: 'HomePageAndTest',
    components: {
        Background,
        Signin,
    },
}
</script>

<style scoped>

</style>