<template>
  <div class="container">
    <div class="card-columns" v-if="headline.length > 0">
      <div class="card cards" v-for="headlines in headline" :key="headlines.index">
        <img :src="headlines.urlToImage" class="card-img-top" alt="">
        <div class="card-body">
          <h6 class="card-title">{{headlines.title}}</h6>
          <p class="small">{{headlines.description}}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <img src="../assets/error.png" alt="Error" width="80%">
      <p class="small text-center">Ups, Server Error !</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  data () {
    return{
      headline : [],
      Error : []
    }
  },

  filters: {
    dtSubtract (dt, duration, unit) {
      return moment.utc(dt).subtract(duration, unit)
    },
    dtFormat (dt, format) {
      return moment.utc(dt).format(format)
    }
  },

  method (data) {
    this.headline = data
  },

  mounted () {
    const api_key = process.env.VUE_APP_API_KEY
    const BaseUrl = process.env.VUE_APP_BASE_URL
    const Country = 'id'
    const Category = 'science'

      axios
        .get(`${BaseUrl}/v2/top-headlines?country=${Country}&category=${Category}&apiKey=${api_key}&page=1`)
        .then((Response) => {
          this.headline = Response.data.articles
          console.log(Response.data.code);
        })
        .catch((Error) => {
          console.log(Error);
        })
  }
}
</script>

<style>
.cards {
  margin-top: 5%;
  box-shadow: 0 4px 10px 0 rgba(0, 0.9, 0.6, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  max-height: 435px;
  min-height: 435px;
}

.cards .card-img-top {
  max-height: 200px;
  min-height: 200px;
}
</style>