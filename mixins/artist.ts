import Vue from 'vue'
const artistMixin = Vue.extend({
  methods: {
    getCover(artist: any) {
      const { images } = artist
      return images[0] ? images[0].url : '[N/A]'
    },
  },
})

export default artistMixin
