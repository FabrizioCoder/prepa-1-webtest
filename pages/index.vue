<template>
  <MainContent />
  <Facebook
    page-url="https://www.facebook.com/SomosPrepaUno"
    :tabs="'timeline'"
    :hide-cover="false"
    :show-facepile="true"
    :small-header="false"
  />
</template>
<script>
import MainContent from './components/MainContent.vue';
import Facebook from '~/components/Facebook.vue';

export default {
  components: {
    Facebook,
    MainContent,
  },
};
</script>
