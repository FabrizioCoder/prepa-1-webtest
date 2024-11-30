<template>
  <div class="flex flex-1 items-center justify-center">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
      <h2 class="text-xl font-bold text-secondary text-center mb-6">
        BIENVENIDO<br />{{ title }}
      </h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="matricula" class="block text-primary font-medium mb-2">
            Matrícula
          </label>
          <input
            id="matricula"
            v-model="matricula"
            type="text"
            placeholder="Ingrese su matrícula (8 dígitos)"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            minlength="8"
            maxlength="8"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-primary font-medium mb-2">
            Contraseña INET
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Ingrese su contraseña"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>
        <div class="mb-6">
          <input type="checkbox" id="privacy" class="mr-2" required />
          <label for="privacy" class="text-primary">
            He leído y acepto el
            <a
              href="https://www.prepa1.uady.mx/documentos/ap_alumnos.pdf"
              class="text-blue-600 hover:underline"
            >
              aviso de privacidad y de protección de datos de los estudiantes de
              la dependencia
            </a>
          </label>
        </div>
        <button
          type="submit"
          class="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-secondary transition"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleSubmit() {
      return this.$emit('submit', {
        matricula: this.matricula,
        password: this.password,
      });
    },
  },
  data() {
    // returna un objeto con las propiedades matricula y password
    return {
      matricula: '',
      password: '',
    };
  },
};
</script>
