<template>
  <ul class="text-secondary flex justify-between w-full md:w3/4 lg:w-1/2">
    <li>
      <button type="button" :disabled="isInFirstPage" @click="onClickFirstPage">
        Primera
      </button>
    </li>

    <li>
      <button
        type="button"
        :disabled="isInFirstPage"
        @click="onClickPreviousPage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li v-for="page in pages" :key="page.name">
      <button
        type="button"
        :disabled="page.isDisabled"
        :class="{ 'text-primary': isPageActive(page.name) }"
        @click="onClickPage(page.name)"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li>
      <button type="button" :disabled="isInLastPage" @click="onClickNextPage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </li>

    <li>
      <button type="button" :disabled="isInLastPage" @click="onClickLastPage">
        Última
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: [Number, String],
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1
      }

      // When on the last page
      if (this.currentPage === parseInt(this.totalPages)) {
        return parseInt(this.totalPages) - this.maxVisibleButtons
      }

      // When inbetween
      return this.currentPage - 1
    },
    pages() {
      const range = []

      for (
        let i = this.startPage;
        i <=
        Math.min(
          this.startPage + this.maxVisibleButtons - 1,
          parseInt(this.totalPages)
        );
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        })
      }

      return range
    },
    isInFirstPage() {
      return this.currentPage === 1
    },
    isInLastPage() {
      return this.currentPage === parseInt(this.totalPages)
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1)
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickPage(page) {
      this.$emit('pagechanged', page)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickLastPage() {
      this.$emit('pagechanged', parseInt(this.totalPages))
    },
    isPageActive(page) {
      return this.currentPage === page
    },
  },
}
</script>
<style>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}
</style>
