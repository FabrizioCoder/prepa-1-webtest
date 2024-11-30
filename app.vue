<template>
  <Navbar />
  <div class="flex">
    <Sidebar />
    <MainContent />
    <Facebook
      page-url="https://www.facebook.com/SomosPrepaUno"
      :tabs="'timeline'"
      :hide-cover="false"
      :show-facepile="true"
      :small-header="false"
    />
  </div>
  <Footer />
</template>
<style>
body {
  @apply bg-primary min-h-lvh;
}
</style>
<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import MainContent from './components/MainContent.vue';
import Facebook from '~/components/Facebook.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Facebook,
    Sidebar,
    MainContent,
    Footer,
  },
};
</script>
