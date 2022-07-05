<template>
  <div class="container">
    <div class="flex justify-center items-center text-primary">Loading ...</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import { validateCodeAndGetAccess } from '~/services/account'
export default Vue.extend({
  async mounted() {
    try {
      const { code } = this.$route.query
      if (!code) {
        this.$router.push('/')
        return
      }
      const {
        access_token: accessToken,
        expires_in: expiresIn,
        token_type: tokenType,
      } = await validateCodeAndGetAccess()
      this.login({ accessToken, expiresIn, tokenType, userLogged: true })

      this.$router.push('/search')
    } catch (e) {
      alert(e)
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions(['login']),
  },
})
</script>
