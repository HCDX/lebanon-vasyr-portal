<template>
  <div id="app" v-bind:class="{ 'no-scroll': noScroll }">
    <div id="loading-view" v-if="loading">
      <div class="loading-icon">
        <div class="loading-text">Loading VASyR</div>
        <div class="lds-facebook"><div></div><div></div><div></div></div>
      </div>
    </div>
    <div id="main-container" v-images-loaded="loaded">
      <div id="nav">
        <TopMenu />
      </div>
      <router-view/>
      <modal :height="200" name="download-modal">
        <div class="header">
          <div class="header-text">
            File Not Available
          </div>
          <div class="close-button" v-on:click="closeModal">x</div>
        </div>
        <div class="content">
          <div class="content-text">
            This File is Currently Not Available, Coming Soon
          </div>
        </div>
      </modal>
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

        // if document is ready and controllers mounted and all images loaded then stop loading
        if(this.allLoaded) {
          this.loading = false;
          this.noScroll = false;
        }
      } 
    }
  },
  methods: {
    loaded() {
      this.allLoaded = true;
      // if document is ready and controllers mounted and all images loaded then stop loading
      if(this.mounted) {
        this.noScroll = false;
        this.loading = false;
      }
    },
    closeModal() {
      this.$modal.hide('download-modal');
    }
  }
}
</script>

<style>
:root {
  --var-theme-background: #8cc4c1;
  --var-theme-text-dark: #353966;
  --var-theme-button-info-main: #51918c;
  --var-theme-button-info-main-hover: #66bbb5;
  --var-theme-button-info: #51918c;
  --var-theme-button-info-text: #aae7e3;
  --var-theme-button-info-hover: #66bbb5;
  --var-theme-button-info-hover-text: #4f8682;
  --var-theme-button-info-main-text: #ffffff;
  --var-theme-button-info-main-hover-text: #ffffff;
}

@import url('https://fonts.googleapis.com/css?family=Roboto:300i,400,500,500i,700,700i&display=swap');
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/montserrat/Montserrat-Regular.ttf');
}

@font-face {
  font-family: 'Montserrat-Black';
  src: url('assets/fonts/montserrat/Montserrat-Black.ttf');
}

@font-face {
  font-family: 'Montserrat-Light';
  src: url('assets/fonts/montserrat/Montserrat-Light.ttf');
}

@font-face {
  font-family: 'Montserra-Medium';
  src: url('assets/fonts/montserrat/Montserrat-Medium.ttf');
}

@font-face {
  font-family: 'Montserrat-Bold';
  src: url('assets/fonts/montserrat/Montserrat-Bold.ttf');
}

body, html {
  height: 100%;
  font-family: 'Montserrat-Bold' !important;
}

#app {
  height: 100%;
  font-family: 'Montserrat-Bold' !important;
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
  height: 100%;
}

.btn-info-main {
  background-color: var(--var-theme-button-info-main) !important;
  border-color: var(--var-theme-button-info-main) !important;
  color: var(--var-theme-button-info-main-text) !important;
  margin: 5px ;
}

.btn-info-main:hover {
  background-color: var(--var-theme-button-info-main-hover) !important;
  border-color: var(--var-theme-button-info-main-hover) !important;
  color: var(--var-theme-button-info-main-hover-text) !important;
}

.btn-info {
  background-color: var(--var-theme-button-info) !important;
  border-color: var(--var-theme-button-info) !important;
  color: var(--var-theme-button-info-text) !important;
}

.btn-info:hover {
  background-color: var(--var-theme-button-info-hover) !important;
  border-color: var(--var-theme-button-info-hover) !important;
  color: var(--var-theme-button-info-hover-text) !important;
}

.no-scroll {
  overflow-y: hidden;
}

#loading-view {
  position: fixed;
  z-index: 20;
  background: var(--var-theme-background);
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

.header {
  position: relative;
  width: 100%;
  height: 80px;
  background-color: var(--var-theme-background);
}

.header .header-text {
  font-family: 'Monteserrat';
  padding: 28px 0px 28px 20px;
  color: white;
}

.content {
  width: 100%;
  height: calc(100% - 80px);
}

.content .content-text {
  padding: 48px 0 48px 35px;
}

.close-button {
  font-family: 'Monteserrat';
  font-size: 24px;
  color: white;
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;
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
