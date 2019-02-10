<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link to="/" class="navbar-brand" style="color:white">TaskManager</router-link>
  <div class="navbar" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/authors" class="nav-link">Authors</router-link>
        </li>
        <li class="nav-item">
        <router-link to="/" class="nav-link">Tasks</router-link>
      </li>
    </ul>
  </div>
</nav>

<router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style scoped>
.container{
  margin-top: 20px;
}

</style>
