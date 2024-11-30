<template>
  <a
    :href="link"
    class="block text-primary font-bold hover:text-secondary hover:underline"
  >
    {{ title }}
  </a>
</template>

<script>
export default {
  name: "SidebarItem",
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
