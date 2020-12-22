<template>
<!-- <H1>{{headline.title}}</H1> -->
<h1>detail {{$route.params.url}} {{headline.content}} </h1>

</template>

<script>
import axios from 'axios'
export default {
data () {
    return{
      headline : []
    }
  },

  method (data) {
    this.headline = data
  },

  mounted () {
    const api_key = process.env.VUE_APP_API_KEY
    const BaseUrl = process.env.VUE_APP_BASE_URL
    const Country = 'id'
    const Category = 'technology'
      axios
        .get(`${BaseUrl}/v2/top-headlines?country=${Country}&category=${Category}&apiKey=${api_key}` + this.$route.params.url)
        .then((Response) => {
          this.headline = Response.data.articles
          console.log('halo');
        })
        .catch((Error) => {
          console.log(Error);
          console.log('Halo');
        })
  }
}
</script>

<style>

</style>