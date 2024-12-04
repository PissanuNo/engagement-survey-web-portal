<template>
    <div>
        <section>
            <Background/>
            <Signin/>
            <Modal/>
        </section>
  </div>

</template>

<script>
import Background from '../components/globalComponents/Background.vue';
import Signin from '../components/SignIn/Signin.vue';
import Modal from '../components/Modal/Modal.vue';
export default {
    name: 'HomePageAndTest',
    components: {
        Background,
        Signin,
        Modal,
    },
}
</script>

<style scoped>

</style>