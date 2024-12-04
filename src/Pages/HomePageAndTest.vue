<template>
    <div class="sort">
        <header>
            <!-- <AppHeader/> -->
        </header>
        <aside>
            <!-- <SideBar/> -->
        </aside>
    </div>
    <div>
        <TestSec1 />
    </div>
</template>

<script>
import TestSec1 from '../components/test/TestSec1.vue';

export default {
    name: 'HomePageAndTest',
    component: {
        TestSec1
    },
}
</script>

<style scoped>
/* .sort{
    display: flex;
}     */
</style>