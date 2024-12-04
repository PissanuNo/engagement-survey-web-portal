<template>
  <div>
    <header>
      <AppHeader />
    </header>
    <Aside>
      <SideBar/>
    </Aside>
    <!-- <section>
        <TestSec1 />
    </section> -->
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import TestSec1 from '../components/test/TestSec1.vue';

export default {
  name: "HopmePage",
  component: {
    TestSec1
  },
};
</script>
