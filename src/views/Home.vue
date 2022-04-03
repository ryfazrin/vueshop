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
          <v-card :to="'/book/' + book.slug">
            <v-img :src="book.cover" class="white--text">
              <v-card-title
                class="fill-right align-end"
                v-text="book.title"
              ></v-card-title>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      categories: [],
      books: [
        {
          id: 1,
          cover: "https://via.placeholder.com/150",
          title: "Laravel 6.0",
          slug: "laravel-6-0",
        },
        {
          id: 2,
          cover: "https://via.placeholder.com/150",
          title: "Vue 2.6",
          slug: "vue-2-6",
        },
        {
          id: 3,
          cover: "https://via.placeholder.com/150",
          title: "PHP 7.4",
          slug: "php-7-4",
        },
        {
          id: 4,
          cover: "https://via.placeholder.com/150",
          title: "NodeJS 14",
          slug: "nodejs-14",
        },
      ],
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
  },
  methods: {
    getImage(image) {
      if (image != null && image.length > 0) {
        return process.env.VUE_APP_BACKEND_URL + '/images' + image
      }
      // default image jika tidak ditemukan,
      // letakkan image ini pada folder /public/img di project Vue
      // return "img/unavailable.png"
      return "https://via.placeholder.com/150"
    }
  },
}
</script>
