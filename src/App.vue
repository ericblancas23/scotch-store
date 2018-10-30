<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
      <div class="container">
          <b-nav tabs>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/Cart">Cart</b-nav-item>
            <b-nav-item to="/Admin">Admin</b-nav-item>
          </b-nav>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
