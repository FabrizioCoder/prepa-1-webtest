<template>
  <figure>
    <a :href="link" rel="noopener noreferrer" :aria-label="title">
      <img :src="image" :alt="alt" :style="{ width: imageWidth }" />
    </a>
    <figcaption>{{ title }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'ResourceItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    imageWidth: {
      type: String,
      default: '100%',
    },
  },
};
</script>

<style scoped>
figure {
  text-align: center;
  margin: 0;
}
figcaption {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
  text-align: center;
}
</style>
