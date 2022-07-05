<template>
  <nav class="flex flex-row items-center justify-between p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="hidden md:block font-thin text-xl tracking-tight">
        Josue Martinez
      </span>
      <span class="block md:hidden font-thin text-xl tracking-tight"> JM </span>
    </div>
    <div v-if="userLogged" class="flex flex-row items-center ml-auto">
      <NuxtLink to="/search" class="block text-white hover:text-secondary mr-4">
        Buscar
      </NuxtLink>
      <NuxtLink to="/albums" class="block text-white hover:text-secondary mr-4">
        Mis Albumes
      </NuxtLink>
      <span class="text-white mr-5">|</span>
      <button
        class="hidden md:block text-white hover:text-secondary"
        @click="logout()"
      >
        Cerrar sesión
      </button>
      <button
        class="block md:hidden text-white hover:text-white"
        @click="logout()"
      >
        <Exit></Exit>
      </button>
    </div>
  </nav>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      userLogged: ({ userLogged }) => userLogged,
    }),
  },
  methods: {
    ...mapActions(['login']),
    logout() {
      this.login({
        accessToken: '',
        expiresIn: 0,
        tokenType: '',
        userLogged: false,
      })
      this.$router.push('/')
    },
  },
}
</script>
