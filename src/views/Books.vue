<template>
  <div>
    <v-container class="ma-0 pa-0" grid-list-sm>
      <v-subheader> All Books </v-subheader>
      <v-layout wrap>
        <v-flex v-for="book in books" :key="`book-` + book.id" xs6>
          <book-item :book="book" />
        </v-flex>
      </v-layout>
      <v-pagination
        v-model="page"
        @input="go"
        :length="lengthPage"
        :total-visible="5"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
export default {
  components: { 
    BookItem: () => import(/* webpackChunkName: "book-item" */ '@/components/BookItem.vue')
  },
  data() {
    return {
      books: [],
      page: 0,
      lengthPage: 0
    }
  },
  created() {
    this.go()
  },
  methods: {
    go() {
      let url = '/books?page=' + this.page
      this.axios.get(url)
        .then((response) => {
          let { data, meta } = response.data
          this.books = data
          this.page = meta.current_page
          this.lengthPage = meta.last_page
        })
        .catch((error) => {
          let { responses } = error
          console.log(responses)
        })
    }
  },
}
</script>

<style>
</style>