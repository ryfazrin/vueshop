<template>
  <div>
    <v-card v-if="book.slug">
      <v-img
        :src="getImage('/books/' + book.cover)"
        class="white--text"
        height="200px"
      >
        <v-card-title
          class="fill-height align-end"
          v-text="book.title"
        ></v-card-title>
      </v-img>
    </v-card>

    <v-card-text>
      <v-simple-table dense>
        <tbody>
          <tr>
            <td><v-icon>mdi-account-tie</v-icon> Author</td>
            <td>{{ book.author }}</td>
          </tr>
          <tr>
            <td><v-icon>mdi-bullhorn</v-icon> Publisher</td>
            <td>{{ book.publisher }}</td>
          </tr>
          <tr>
            <td><v-icon>mdi-weight</v-icon> Weight</td>
            <td>{{ book.weight }}</td>
          </tr>
          <tr>
            <td><v-icon>mdi-format-list-bulleted</v-icon> Stock</td>
            <td>{{ book.stock }} item</td>
          </tr>
          <tr>
            <td><v-icon>mdi-eye</v-icon> Views</td>
            <td>{{ book.views }}</td>
          </tr>
          <tr>
            <td><v-icon>mdi-cash</v-icon> price</td>
            <td class="orange--text">
              Rp {{ book.price.toLocaleString("id-ID") }}
            </td>
          </tr>
        </tbody>
      </v-simple-table>

      Description: <br />
      {{ book.description }}
      <br />
      Categories:
      <v-chip
        v-for="category in book.categories"
        :key="category.id"
        :to="'/category/' + category.slug"
        small
      >
        {{ category.name }}
      </v-chip>
    </v-card-text>
    <v-card-actions>
      <v-btn block color="success" @click="buy" :disabled="book.stock == 0">
        <v-icon>mdi-card-plus</v-icon> &nbsp; BUY
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      book: {},
    }
  },
  created() {
    this.go()
  },
  methods: {
    ...mapActions({
      addCart: 'cart/add',
      setAlert: 'alert/set'
    }),
    buy() {
      // alert('buy)
      // this.$store.dispatch('add', this.book)
      this.addCart(this.book)
      this.setAlert({
        status: true,
        color: 'success',
        text: 'Added to cart'
      })
    },
    go() {
      let { slug } = this.$route.params
      let url = '/books/slug/' + slug
      // url = url + '?page=' + page
      url = encodeURI(url)

      this.axios.get(url)
        .then((response) => {
          let { data } = response.data
          this.book = data
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