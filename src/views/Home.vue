<template>
  <div>
    <!-- template categories -->
    <v-container class="ma-0 pa-0" grid-list-sm>
      <div class="text-right">
        <v-btn small text to="/categories" class="blue--text">
          All Categories <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <v-layout wrap>
        <v-flex
          v-for="category in categories"
          :key="`category-` + category.id"
          class="pa-1"
          xs6
        >
          <v-card :to="'/category/' + category.slug">
            <v-img
              :src="getImage('/categories/' + category.image)"
              class="white--text"
            >
              <v-card-title
                class="fill-height align-end"
                v-text="category.name"
              ></v-card-title>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- template books -->
    <v-container class="ma-0 pa-0 mt-2">
      <div class="text-right">
        <v-btn small text to="/books" class="blue--text">
          All Books <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <v-layout wrap>
        <v-flex v-for="book in books" :key="`book-` + book.id" class="pa-1" xs6>
          <book-item :book="book" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BookItem from '@/components/BookItem.vue'
export default {
  components: { BookItem },
  name: "Home",
  data() {
    return {
      categories: [],
      books: [],
    }
  },
  created() {
    console.log("get data categories")
    this.axios
      .get("/categories/random/2")
      .then((response) => {
        let { data } = response.data
        this.categories = data
      })
      .catch((error) => {
        let { response } = error
        console.log(response)
      })

    console.log("get data books")
    this.axios
      .get("/books/top/4")
      .then((response) => {
        let { data } = response.data
        this.books = data
      })
      .catch((error) => {
        let { response } = error
        console.log(response)
      })
  },
}
</script>
