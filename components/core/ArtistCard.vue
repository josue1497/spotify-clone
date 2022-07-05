<template>
  <div
    class="max-w-sm overflow-hidden shadow-lg p-5 my-3 rounded-lg group bg-transparent cursor-pointer hover:bg-primary transition-all"
    @click="goToArtists"
  >
    <div class="w-full h-64 lg:h-56">
      <img
        class="block w-full h-full rounded-lg"
        :src="cover"
        alt="Sunset in the mountains"
      />
    </div>
    <div class="py-4">
      <div class="font-bold text-2xl mb-2 text-white group-hover:text-black">
        {{ name }}
      </div>
      <p class="text-secondary text-base group-hover:text-gray-900">
        Followers {{ followers }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    artistId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    followers: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToArtists() {
      this.$router.push(`/artists/${this.artistId}`)
    },
  },
}
</script>
