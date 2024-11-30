<template>
  <nav
    class="flex items-center bg-white bg-custom-navbar bg-no-repeat bg-right text-black w-full px-8 py-2 shadow-md"
    :style="{
      backgroundSize: isMobile ? '100%' : '30%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: isMobile ? 'bottom' : 'right',
      backgroundImage: isMobile ? 'none' : null,
    }"
  >
    <!-- Logo -->
    <div>
      <img
        src="/public/logo_uady.svg"
        alt="Logo UADY"
        class="w-auto h-20 sm:h-24"
      />
    </div>

    <!-- Contenido central -->
    <div class="flex-1">
      <h1
        class="text-[22px] sm:text-[35px] mb-2 font-bold text-center"
        :class="isMobile ? 'text-[20px]' : ''"
      >
        Escuela Preparatoria Uno
      </h1>

      <!-- Menú de navegación -->
      <button
        @click="toggleMenu"
        class="block sm:hidden text-black focus:outline-none mx-auto mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <ul
        id="li-links-nav"
        :class="menuOpen ? 'block' : 'hidden'"
        class="list-none sm:flex sm:gap-5 p-0 justify-center text-center"
      >
        <li>
          <a
            href="http://www.prepa1.uady.mx/vision_2030.pdf"
            target="_blank"
            class="text-primary font-bold text-[18px] hover:text-secondary hover:underline"
            >Visión</a
          >
        </li>
        <li>
          <a
            href="http://www.prepa1.uady.mx/mision_2030.pdf"
            target="_blank"
            class="text-primary font-bold text-[18px] hover:text-secondary hover:underline"
            >Misión</a
          >
        </li>
        <li>
          <a
            href="https://www.prepa1.uady.mx/documentos/PDI2021.pdf"
            target="_blank"
            class="text-primary font-bold text-[18px] hover:text-secondary hover:underline"
            >Plan de desarrollo</a
          >
        </li>
        <li>
          <a
            href="http://www.prepa1.uady.mx/historia.php"
            target="_blank"
            class="text-primary font-bold text-[18px] hover:text-secondary hover:underline"
            >Historia</a
          >
        </li>
        <li>
          <a
            href="http://www.prepa1.uady.mx/directorio.php"
            target="_blank"
            class="text-primary font-bold text-[18px] hover:text-secondary hover:underline"
            >Organización</a
          >
        </li>
        <li>
          <a
            href="http://www.prepa1.uady.mx/directorio1.php"
            target="_blank"
            class="text-primary font-bold text-[18px] hover:text-secondary hover:underline"
            >Directorio</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuOpen: false,
      isMobile: false,
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
};
</script>

<style scoped>
.bg-custom-navbar {
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: right;
}

@media (max-width: 768px) {
  .bg-custom-navbar {
    background-size: 100%;
    background-position: center;
  }

  h1 {
    font-size: 20px;
  }
}
</style>
