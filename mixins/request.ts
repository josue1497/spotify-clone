import Vue from 'vue'
import { mapState } from 'vuex'
import { _get, _post, _put, _delete } from '~/services/_axios'
const requestMixin = Vue.extend({
  computed: {
    ...mapState({
      accessToken: ({ accessToken }: any) => accessToken,
      tokenType: ({ tokenType }: any) => tokenType,
    }),
    authCredentials() {
      return `${this.tokenType} ${this.accessToken}`
    },
  },
  methods: {
    addAuthorizationHeader(options: any) {
      return {
        headers: {
          Authorization: this.authCredentials,
          ...options.headers,
        },
        ...options,
      }
    },
    get(uri: string, options: any = {}) {
      const vm: any = this
      return _get(`${uri}`, vm.addAuthorizationHeader(options))
    },
    post(uri: string, options: any = {}) {
      const vm: any = this
      return _post(`${uri}`, vm.addAuthorizationHeader(options))
    },
    put(uri: string, options: any = {}) {
      const vm: any = this
      return _put(`${uri}`, vm.addAuthorizationHeader(options))
    },
    delete(uri: string, options: any = {}) {
      const vm: any = this
      return _delete(`${uri}`, vm.addAuthorizationHeader(options))
    },
  },
})

export default requestMixin
