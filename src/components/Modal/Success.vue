<template>
    <div>
        <button type="button" class="btn btn-submit" @click="showModal">
            Submitt&nbsp;&nbsp;
        </button>

        <div v-if="isShowModal" class="modal-overlay">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <img src="/src/assets/images/success.png" alt="logo" class="logo" />
                        <h1>Success</h1>
                    </div>
                    <div class="modal-body">
                        .....
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModal">
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Warning',

    setup() {
        const isShowModal = ref(false);

        const closeModal = () => {
            isShowModal.value = false;
        }

        const showModal = () => {
            isShowModal.value = true;
        }



        return {
            isShowModal,
            closeModal,
            showModal
        };
    }
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

h1{
    font-weight: bold;

}

.modal-dialog-centered {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    max-height: 100%;
}

.modal-content {
    background-color: #ffffff;
    height: 350px;
    width: 600px;
}

.modal-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 10px;
}

.logo {
    width: 80px;
    height: 80px;
    margin-top: 2%;
}

.modal-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.modal-footer {
    display: flex;
    justify-content: center;
    border: none;
    padding: 20px;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 11vw;
}

.btn-secondary {
    color: #ffffff;
    border: none;
    background-color: #2f9a36;
    width: 9vw;

}

.btn-secondary:hover {
    color: rgb(0, 0, 0) !important;
    background-color: var(--senary-color) !important;
    border: none;

}

.btn-submit {
    color: #000000;
    border: none;
}

.btn-submit:hover {
    color: rgb(0, 0, 0) !important;
    background-color: var(--primary-color) !important;
}
</style>

<style>
.modal-backdrop.show {
    background-color: var(--quinary-color);
}
</style>