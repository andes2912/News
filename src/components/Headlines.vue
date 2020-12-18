<template>
  <div class="headlines">

    <div class="title-card">Headlines</div>
    <div class="headlines-card">
      <div class="card" v-for="headlines in headline.slice(0,4)" :key="headlines.id">
          <img :src="headlines.poster" class="card-img-top" alt="">
          <div class="card-body">
            <p class="card-text">{{headlines.judul}}</p>
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
    axios
      .get('https://berita-news.herokuapp.com/nasional')
      .then((Res) => {
        this.headline = Res.data.data
        console.log(Res.data);
      })
      .catch(Err => {
        console.log(Err)
      })
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