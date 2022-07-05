<template>
  <section class="container">
    <div class="flex flex-col py-20 text-left items-center">
      <div
        class="flex flex-col max-w-full md:max-w-sm text-left md:text-center"
      >
        <h1
          class="text-white font-bold text-4xl md:text-6xl lg:text-8xl leading-none"
        >
          Mis albumes <span class="text-primary">guardados</span>
        </h1>
        <h3 class="text-base text-secondary font-thin my-5">
          Disfruta de tu música a un solo click y descube que discos has
          guardado dentro de “mis álbumes”
        </h3>
      </div>
      <div class="flex flex-col mt-5">
        <div class="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <AlbumCard
            v-for="(album, index) in albums"
            :key="index"
            :album-id="album.id"
            :name="album.name"
            :cover="getCover(album)"
            :release-date="album.release_date"
          ></AlbumCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import albumMixin from '~/mixins/album'
import artistMixin from '~/mixins/artist'
import requestMixin from '~/mixins/request'

export default {
  mixins: [albumMixin, requestMixin, artistMixin],
  middleware: 'auth',
  data() {
    return {
      albums: [],
    }
  },
  watch: {
    userAlbums(newVal, oldVal) {
      if (newVal.length !== oldVal.length) {
        this.getAlbums()
      }
    },
  },
  async mounted() {
    await this.getAlbums()
  },
  methods: {
    async getAlbums() {
      const { data, status } = await this.get(
        `albums?ids=${this.userAlbums.join(',')}`
      )

      if (status === 200) {
        this.albums = data.albums
      }
    },
  },
}
</script>
