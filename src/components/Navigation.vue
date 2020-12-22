<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Networks</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="'/technology'">Technology</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/science'">Science</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/health'">Health</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/sports'">Sport</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/business'">Business</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/entertainment'">Entertainment</router-link>
        </li>

      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
nav {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
}
nav .search {
  border-radius: 10px;
}
</style>
