<template>
  <div>
    <v-container class="ma-0 pa-0" grid-list-sm>
      <v-subheader> All Category </v-subheader>
      <v-layout wrap>
        <v-flex
          v-for="category in categories"
          :key="`category-` + category.id"
          xs6
        >
          <v-card :to="'/category/' + category.slug">
            <v-img :src="getImage('/categories/' + category.image)">
              <v-card-title
                class="fill-height align-end"
                v-text="category.name"
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
  data() {
    return {
      categories: [],
    }
  },
  created() {
    let url = '/categories?page=1'
    this.axios.get(url)
      .then((response) => {
        let { data } = response.data
        this.categories = data
      })
      .catch((error) => {
        let { responses } = error
        console.log(responses)
      })
  },
}
</script>

<style>
</style>