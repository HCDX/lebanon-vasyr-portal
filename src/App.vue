<template>
  <div id="app">
    <div id="nav">
      <TopMenu />
    </div>
    <div id="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopMenu from '@/components/TopMenu.vue'

export default {
  components: {
    TopMenu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300i,400,500,500i,700,700i&display=swap');
body, html {
  height: 100%;
}

#app {
  height: 100%;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 1px;
  margin-top: -1px;
  /* margin-top: 60px; */
}

#nav {
  position: fixed;
  z-index: 5;
  width: 100%;
}

#main-container {
  margin-top: 75px;
  height: calc(100% - 74px);
}
</style>
