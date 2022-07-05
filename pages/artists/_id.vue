<template>
  <section class="container">
    <div class="flex flex-col py-20 text-left items-center">
      <div
        class="flex flex-col lg:flex-row justify-start text-left lg:text-center w-full"
      >
        <img :src="image" alt="artist img" class="rounded-full w-40 h-40" />
        <div class="flex flex-col mx-0 lg:mx-10 text-left">
          <span class="text-base text-gray mt-5 flex">
            <Verified class="mr-2" /> Artista verificado</span
          >
          <h1 class="text-white font-bold text-4xl leading-none mt-1">
            {{ name }}
          </h1>
          <h3 class="text-base text-secondary font-thin mt-8 lg:mt-5">
            <span class="block">Followers: {{ followers }}</span>
            <span class="block">Oyentes mensuales: {{ popularity }}</span>
          </h3>
        </div>
      </div>
      <div class="flex flex-col mt-3 lg:mt-8">
        <p class="text-base text-secondary font-thin my-5">
          Guarda tus álbumes favoritos de {artistName}
        </p>
        <div
          v-if="albums.length"
          class="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          <AlbumCard
            v-for="(album, index) in albums"
            :key="index"
            :name="album.name"
            :cover="getCover(album)"
            :release-date="album.release_date"
            :album-id="album.id"
          ></AlbumCard>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import requestMixin from '~/mixins/request'
import artistMixin from '~/mixins/artist'

export default {
  mixins: [requestMixin, artistMixin],
  middleware: 'auth',
  data: () => ({
    albums: [],
    followers: 0,
    image: '',
    name: '',
    popularity: 0,
  }),
  async mounted() {
    const { id } = this.$route.params
    await this.getArtist(id)
    await this.getArtistsAlbums(id)
  },
  methods: {
    async getArtist(id = '') {
      const { data, status } = await this.get(`artists/${id}`)

      if (status === 200) {
        this.followers = data.followers.total
        this.image = this.getCover(data)
        this.name = data.name
        this.popularity = data.popularity
      }
    },
    async getArtistsAlbums(id = '') {
      const { data, status } = await this.get(`artists/${id}/albums`)

      if (status === 200) {
        this.albums = data.items
      }
    },
  },
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 0 2rem;
  @apply text-white;
}
</style>
