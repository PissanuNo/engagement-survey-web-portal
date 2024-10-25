<template>
    <div>
        <main>
            <LoginForm />
        </main>
    </div>
</template>


<script>
import LoginForm from '../components/Login/LoginForm.vue';
export default {
    name: "HopmePage",
    components: {
        LoginForm
    }
};
</script>