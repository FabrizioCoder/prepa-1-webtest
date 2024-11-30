<template>
  <li>
    <a
      :href="link"
      class="block text-primary hover:text-secondary hover:underline"
    >
      {{ title }}
    </a>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
