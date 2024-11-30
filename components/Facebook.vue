<template>
  <div class="facebook-widget">
    <div v-if="!isMobile" class="widget-container">
      <iframe
        :src="computedUrl"
        class="facebook-iframe"
        width="340"
        height="500"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Facebook',
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  props: {
    pageUrl: {
      type: String,
      required: true,
    },
    tabs: {
      type: String,
      default: 'timeline',
    },
    hideCover: {
      type: Boolean,
      default: false,
    },
    showFacepile: {
      type: Boolean,
      default: true,
    },
    smallHeader: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedUrl() {
      const params = new URLSearchParams({
        href: this.pageUrl,
        tabs: this.tabs,
        hide_cover: this.hideCover ? 'true' : 'false',
        show_facepile: this.showFacepile ? 'true' : 'false',
        small_header: this.smallHeader ? 'true' : 'false',
      }).toString();
      return `https://www.facebook.com/plugins/page.php?${params}`;
    },
  },
};
</script>

<style scoped>
.facebook-widget {
  max-width: 340px;
  margin: 0 auto;
  text-align: center;
}

.facebook-iframe {
  width: 340px;
  height: 500px;
  border: none;
}

@media (max-width: 768px) {
  .facebook-widget {
    display: none;
  }
}
</style>
