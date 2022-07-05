import Vue from 'vue'
import { mapState } from 'vuex'
const albumMixin = Vue.extend({
  computed: {
    ...mapState({
      userAlbums: ({ albums }: any) => albums,
    }),
    isSelectedAlbum() {
      const vm: any = this
      return this.userAlbums.includes(vm.albumId)
    },
  },
  methods: {
    getCover(artist: any) {
      const { images } = artist
      return images[0] ? images[0].url : '[N/A]'
    },
  },
})

export default albumMixin
