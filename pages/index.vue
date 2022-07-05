<template>
  <section class="container">
    <div class="flex flex-col lg:flex-row">
      <Arrow class="max-w-xl p-10"></Arrow>
      <div class="flex flex-col mx-0 lg:mx-20">
        <h1
          class="text-left font-bold text-4xl md:text-6xl leading-none md:leading-tight"
        >
          <span class="block text-white"> Disfruta de la</span>
          <span class="text-primary">mejor música</span>
        </h1>
        <h3
          class="text-white font-thin text-left my-5 text-base md:text-lg w-full md:w-1/2 lg:w-3/4"
        >
          Accede a tu cuenta para guardar tus albumes favoritos.
        </h3>
        <div class="links text-left text-base md:text-xl mt-0 lg:mt-32">
          <button
            class="text-rigth text-white font-bold hover:text-primary flex"
            @click="logIn"
          >
            Log in con Spotfy <ArrowRight class="mx-2"></ArrowRight>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    logIn() {
      const clientId = process.env.SPOTIFY_CLIENT_ID || ''
      const redirectUri = process.env.REDIRECT_URI || ''

      const redirect = encodeURI(redirectUri)

      const url = `${process.env.SPOTIFY_AUTHORIZE_URL}?client_id=${clientId}&response_type=code&redirect_uri=${redirect}&show_dialog=true&scope=user-read-private user-read-email user-library-modify user-library-read user-follow-modify user-follow-read`
      window.location.href = url // Show Spotify's authorization screen
    },
  },
})
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
