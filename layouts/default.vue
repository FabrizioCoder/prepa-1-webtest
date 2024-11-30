<template>
  <Navbar />
  <div class="flex">
    <Sidebar />
    <slot></slot>
  </div>
  <Footer />
</template>
<style>
body {
  @apply bg-primary min-h-lvh;
}
</style>
<script lang="ts">
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
};
</script>
