<template>
  <section class="container">
    <div class="flex flex-col py-20 text-left items-center">
      <div
        class="flex flex-col max-w-full lg:max-w-lg text-left lg:text-center"
      >
        <h1 class="text-white font-bold text-4xl leading-none">
          Busca tus <span class="text-primary">artistas</span>
        </h1>
        <h3 class="text-base text-secondary font-thin my-5">
          Encuentra tus artistas favoritos gracias a nuestro buscador y guarda
          tus álbumes favoritos
        </h3>
        <div class="flex bg-white w-full py-2 px-2 rounded-3xl">
          <input
            id="search-input"
            v-model="q"
            type="text"
            name="search-input"
            class="bg-transparent focus:outline-none px-3 py-2 rounded-full w-3/4 font-bold text-black"
            @keypress.enter="searchArtists"
          />
          <button
            class="bg-primary text-black px-5 py-1 rounded-full text-sm font-bold ml-auto"
            @click="searchArtists"
          >
            Buscar
          </button>
        </div>
      </div>
      <div v-if="artists.length" class="flex flex-col mt-5">
        <p class="text-base text-secondary font-thin my-5">
          Guarda tus álbumes favoritos de <b class="text-primary">{{ q }}</b>
        </p>
        <div class="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <ArtistCard
            v-for="(artist, index) in artists"
            :key="index"
            :name="artist.name"
            :followers="artist.followers.total"
            :artist-id="artist.id"
            :cover="getCover(artist)"
          ></ArtistCard>
        </div>
        <Paginator
          class="mx-auto"
          :total-pages="_totalPages"
          :per-page="itemsPerPage"
          :current-page="currentPage"
          @pagechanged="onPageChange"
        ></Paginator>
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
    artists: [],
    q: '',
    currentPage: 1,
    total: 1,
    itemsPerPage: 20,
  }),
  computed: {
    _totalPages() {
      return Number(this.total / this.itemsPerPage).toFixed()
    },
    offset() {
      return (this.currentPage - 1) * this.itemsPerPage
    },
  },
  watch: {
    currentPage() {
      this.searchArtists()
    },
  },
  methods: {
    async searchArtists() {
      const { q } = this
      if (!q) return

      if (this.offset < 0 || this.offset >= 1000) {
        this.currentPage = 1
        return
      }

      const {
        data: {
          artists: { items, total },
        },
        status,
      } = await this.get(
        `search?q=${q}&type=artist&offset=${this.offset}&limit=${this.itemsPerPage}`
      )
      if (status === 200) {
        this.artists = [...items]
        this.total = total
      }
    },
    onPageChange(page) {
      this.currentPage = page
    },
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 0 2rem;
}
</style>
