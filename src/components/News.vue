<template>
  <div class="news">
    <div class="news-card">
      <div class="row">
        <div class="col-12 col-md-8 col-sm-8">
          <div class="title-news">NEWS TECHNOLOGY</div>
          <div class="card card-content" v-for="headlines in headline" :key="headlines.id">
            <div class="row no-gutters">
              <div class="col-md-3">
                <img :src="headlines.urlToImage" class="card-img" alt="">
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <router-link :to="'detail/' + headlines.url" target="_blank"><h5 class="card-title">{{headlines.title}}</h5></router-link>
                  <p class="card-text">{{headlines.publishedAt | dtSubtract(1, 'hour') | dtFormat('HH:mm:ss')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 col-sm-4">
          <div class="title-news">Populer Search</div>
          <div class="card list-card">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-footer">
              Card footer
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  data () {
    return{
      headline : []
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
    const Category = 'technology'

      axios
        .get(`${BaseUrl}/v2/top-headlines?country=${Country}&category=${Category}&apiKey=${api_key}&page=1`)
        .then((Response) => {
          this.headline = Response.data.articles
          console.log(Response.data);
        })
        .catch((Error) => {
          console.log(Error);
        })
  }
}
</script>

<style>
.news {
  margin-top: 1%;
  margin-bottom: 5%;
}

.title-news {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 15pt;
  margin: 5px;
  margin-bottom: 3px;
}

.card-content {
  box-shadow: 0 4px 10px 0 rgba(0, 0.9, 0.6, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  margin-bottom: 5px;
}

.list-card {
  box-shadow: 0 4px 10px 0 rgba(0, 0.9, 0.6, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
}
</style>