<template>
  <div class="headlines">

    <div class="title-card">Headlines</div>
    <div class="headlines-card">
      <div class="card" v-for="headlines in headline.slice(0,4)" :key="headlines.id">
          <img :src="headlines.urlToImage" class="card-img-top" alt="">
          <div class="card-body">
            <h6 class="card-title">{{headlines.title}}</h6>
            <p class="small">{{headlines.publishedAt | dtSubtract(1, 'hour') | dtFormat('HH:mm:ss')}}</p>
          </div>
      </div>
    </div>
    <div class="button-more">
      <button class="btn">More ></button>
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

  methods: {
    setData (data) {
      this.headline = data
    },
    getApi () {
      const api_key = process.env.VUE_APP_API_KEY
      const BaseUrl = process.env.VUE_APP_BASE_URL
      const Country = 'id'

      axios
        .get(`${BaseUrl}/v2/top-headlines?country=${Country}&apiKey=${api_key}`)
        .then((Response) => {
          this.headline = Response.data.articles
        })
        .catch((Error) => {
          console.log(Error);
        })
    }

  },

  mounted () {
    this.getApi()
  }
}
</script>

<style>
.headlines .headlines-card {
  display: flex;
  flex-direction: row;
}

.title-card {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 20pt;
  margin: 5px;
  margin-top: 20px;
  margin-bottom: -10px;
}

.headlines .card {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  flex: 50%;
  margin: 5px;
}
.card-img-top {
  min-height: 200px;
  max-height: 200px;
}

.button-more {
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
}

.button-more button {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media (max-width: 800px) {
  .headlines .headlines-card {
    flex-direction: column;
  }
}
</style>