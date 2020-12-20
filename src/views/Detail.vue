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
      axios
        .get(`http://localhost:8080/v2/top-headlines?country=id&category=technology&apiKey=${api_key}` + this.$route.params.url)
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