<template>
  <div class="flex-1 flex items-center justify-center p-4">
    <LoginForm title="INTRANET DE LA PREPARATORIA UNO" @submit="handleLogin" />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'LoginPage',
  components: { LoginForm },
  methods: {
    handleLogin({ matricula, password }) {
      console.log('Datos enviados:', { matricula, password });
      // TODO: Aquí manejar el inicio de sesión
    },
  },
};
</script>
