<template>
    <div class="boxcomponent">
        <div class="boxmodal">
            <!-- icon -->
             <h1>Are you sure?</h1>
             <p>Please check your data. We will see you soon.</p>
             <div class="showbutton">
                <button>cancle</button>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
}
</script>

<style scoped>
    .boxcomponent{   
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;

    }

    .boxmodal{

    }
</style>