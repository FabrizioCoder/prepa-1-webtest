<template>
  <div>
    <div
      @click="toggle"
      class="flex justify-between items-center cursor-pointer text-primary font-bold hover:text-secondary hover:underline"
    >
      <span>{{ title }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 transition-transform transform"
        :class="{ 'rotate-180': isOpen }"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <ul v-show="isOpen" class="mt-2 pl-4 space-y-2 border-l border-gray-300">
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarDropdown',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
