<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg px-10 my-3">
    <img
      class="w-64 h-64 lg:w-48 lg:h-48 rounded-lg"
      :src="cover"
      alt="Sunset in the mountains"
    />
    <div class="py-4">
      <div class="font-bold text-2xl mb-2 text-white">{{ name }}</div>
      <p class="text-secondary text-base">Publicado {{ releaseDate }}</p>
    </div>
    <div>
      <button
        :class="`inline-block ${
          !isSelectedAlbum ? 'bg-primary' : 'bg-error'
        } text-black rounded-full px-4 py-2 text-sm font-semibold mr-2 mb-2 hover:bg-secondary`"
        @click="addOrRemoveAlbum"
      >
        <span v-if="!isSelectedAlbum" class="flex"
          ><Plus class="mr-2 font-sm" /> Agregar álbum</span
        >
        <span v-else class="flex">Remover álbum</span>
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import albumMixin from '~/mixins/album'

export default {
  mixins: [albumMixin],
  props: {
    albumId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(['addAlbum', 'removeAlbum']),
    addOrRemoveAlbum() {
      if (this.isSelectedAlbum) {
        this.removeAlbum(this.albumId)
      } else {
        this.addAlbum(this.albumId)
      }
    },
  },
}
</script>
