<template>
    <div class="container-error ">
        <h1>Oops!</h1>
        <h3>{{ error_status }}</h3>
        <p>{{ error_message }}</p>
        <div class="error-actions">
            <button class="btn btn-secondary " @click="handleChange">
                GO&nbsp;TO&nbsp;HOMEPAGE
            </button>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: 'ErrorForm',
    props: {
        error_status: {
            type: String,
            required: true
        },
        error_message: {
            type: String,
            required: true
        }
    },
    setup() {
        const router = useRouter();

        const handleChange = () => {
            router.push('/');
        }
        return {
            handleChange
        }
    }
}
</script>

<style scoped>
.container-error {
    height: 100%;
    width: 100%;
    background-image: url('../assets/images/bakertilly-bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2cm;
    text-align: center;
    color: white;
}


.container-error h1 {
    font-size: 10vw;
    font-weight: bold;
    margin-bottom: 0;
}

.container-error h3 {
    font-size: 3vw;
    font-weight: bold;
    margin-top: 0;

}

.container-error p {
    font-size: 2vw;
    line-height: 1.2;
}

.error-actions {
    font-size: 50%;
    margin-top: 0cm;
    width: calc(25% + 40px);
    padding: 10px 0 10px 0;
}

.btn-secondary {
    /* border: 0; */
    color: white;
    width: 50%;
    height: 7vh;
    background-color: #00BAB3;

}

@media (max-width: 600px) {
    .main-error {
        font-size: 12vw;
    }

    .sub-error {
        font-size: 6vw;
    }

    .sub {
        font-size: 3vw;
    }

}
</style>
