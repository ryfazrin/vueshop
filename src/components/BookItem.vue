<template>
  <div>
    <v-card :to="'/book/' + book.slug">
      <v-img
        :src="getImage('/books/' + book.cover)"
        class="white--text"
      >
        <v-card-title
          class="fill-height align-end"
          v-text="book.title"
        ></v-card-title>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'book-item',
  data() {
    return {
      
    }
  },
}
</script>

<style>

</style>