<template></template>

<script>
export default {
  data() {
    return {
      category: {}, // objek category
      books: [], // daftar buku pada category tersebut
      page: 0,
      lengthPage: 0
    }
  },
  created() {
    this.go()
  },
  methods: {
    go() {
      let { slug } = this.$route.params
      let url = '/categories?slug/' + slug
      url = url + '?page=' + this.page
      url = encodeURI(url)

      this.axios.get(url)
        .then((response) => {
          let { data } = response.data
          let category = data

          this.category = category
          this.books = category.books.data
          this.page = category.books.current_page
          this.lengthPage = category.books.last_page
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