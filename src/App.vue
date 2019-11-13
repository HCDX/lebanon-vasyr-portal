<template>
  <div id="app" v-bind:class="{ 'no-scroll': noScroll }">
    <div id="loading-view" v-if="loading">
      <div class="loading-icon">
        <div class="loading-text">Loading VASyR</div>
        <div class="lds-facebook"><div></div><div></div><div></div></div>
      </div>
    </div>
    <div id="nav">
      <TopMenu />
    </div>
    <div id="main-container" v-images-loaded="loaded">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopMenu from '@/components/TopMenu.vue'
import imagesLoaded from 'vue-images-loaded'

export default {
  components: {
    TopMenu
  },
  data: () => ({
    allLoaded: false,
    noScroll: true,
    loading: true,
    mounted: false
  }),
  directives: {
    imagesLoaded
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.mounted = true;

        // if document is ready and controllers mounted then stop loading
        // if(this.allLoaded) {
          this.loading = false;
          this.noScroll = false;
        // }
      } 
    }
  },
  methods: {
    loaded(instance) {
      this.allLoaded = true;
      // if document is ready and controllers mounted then stop loading
      if(this.mounted) {
        this.noScroll = false;
        this.loading = false;
      }
    }
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
  position: relative;
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

.no-scroll {
  overflow-y: hidden;
}

#loading-view {
  position: fixed;
  z-index: 20;
  background: rgba(39, 59, 86, 0.97);
  height: 100%;
  width: 100%;
  top: 0;
}

#loading-view .loading-icon {
  color: white;
  position: absolute;
  top: 45%;
  left: 45%;
}

.loading-text {
  font-size: 18px;
}

.lds-facebook {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}

.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.lds-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}

.lds-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}

@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 26px;
  }
}

</style>
