<template>
  <div id="main" class="main-transition">
    <div class="image-overlay"></div>
    <div class="home-main-container">
      <div class="logos-container">
        <div class="logos-row">
          <div class="organization-logo">
            <img alt="vasyr logo" :src="require('@/assets/logos/Interagency-logo.png')">
          </div>
          <div class="organization-logo">
            <img alt="vasyr logo" :src="require('@/assets/logos/unhcr-logo.png')">
          </div>
        </div>
        <div class="logos-row">
          <div class="organization-logo">
            <img alt="vasyr logo" :src="require('@/assets/logos/wfp-logo.png')">
          </div>
          <div class="organization-logo">
            <img alt="vasyr logo" class="smaller" :src="require('@/assets/logos/unicef-logo.png')">
          </div>
        </div>
      </div>
      <div class="intro-container">
        <div class="intro-text part1">
          {{introduction.part_1}}
        </div>
        <div class="intro-text part2">
          {{introduction.part_2}}
        </div>
        <div class="intro-text part3">
          {{introduction.part_3}}
        </div>
      </div>
      <div class="download-button">
        <a v-on:click="trackDownload()" :href="this.vasyrDownloadDashboard2024" v-bind:year="this.vasyrDownloadDashboard2024" target="_blank" class="btn btn-info-main" style="font-weight: bold;" download>
          VASyR 2024 Dashboard
        </a>
        <a v-on:click="trackDownload()" :href="this.vasyrDownloadSummary2024" v-bind:year="this.vasyrDownloadSummary2024" target="_blank" class="btn btn-info-main" style="font-weight: bold;" download>
          Executive Summary 2024
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import DataService from '@/services/data.service';
import helpers from '@/helpers/helpers';

export default {
  name: 'main-sec',
  data: () => ({
    dataService: new DataService(),
    logos: [],
    introduction: '',
    vasyrDownloadDashboard2024: '',
    vasyrDownloadSummary2024: '',
    vasyrPresentationDownloadLink2022: ''
  }),
  mounted() {
    this.$gtag.event('site_visit');
    this.introduction = this.dataService.getHomeIntro();
    this.vasyrDownloadDashboard2024 = this.dataService.getVasyrDownloadLink('2024-dashboard');
    this.vasyrDownloadSummary2024 = this.dataService.getVasyrDownloadLink('2024-summary');
    // this.vasyrPresentationDownloadLink2022 = this.dataService.getVasyrPresentationLink('2022');
    let main = document.getElementById("main");

    if(!helpers.isMobile.any()) {
      main.addEventListener("mousemove", this.mouseMove);
      main.addEventListener("mouseenter", this.mouseEnter);
      main.addEventListener("mouseleave", this.mouseLeave);
    }
    
  },
  methods: {
    trackDownload() {
      this.$gtag.event('file_download_clicked', {
        file_name: 'VASyR 2024 Dashboard.pdf',
      });
    },
    getImgUrl(img) {
      return require(img);
    },
    mouseMove(element) {
      var home = document.getElementById("main");
      let w = window.innerWidth;
      let h = window.innerHeight;
      let mouseX = element.clientX;
      let mouseY = element.clientY;
      let startImgPosition = 75;
      
      if(w >= 1900 && w <= 3500) {
         startImgPosition = 30;
      }

      let imageX = (mouseX/w)*10;
      let imageY = startImgPosition + (mouseY/h)*10;
      home.style["background-position"] = imageX + "% " + imageY + "%";
    },
    mouseEnter() {
      setTimeout(function() {
        this.main.classList.remove('main-transition');
      }, 150);
    },
    mouseLeave() {
      setTimeout(function() {
        this.main.classList.add('main-transition');
      }, 150);
    }
  }
}
</script>
<style scoped>
#main {
  position: relative;
  min-height: 100%;
  background: url('../assets/images/home-background.jpg');
  background-position-y: 75%;
  background-color: var(--var-theme-text-dark);
  background-repeat: no-repeat;
  background-size: 105%;
  font-family: 'Montserrat' !important;
}

.main-transition {
  transition: background-position 0.15s;
}

.home-main-container {
  position:relative;
  height: 100%;
  padding: 15% 180px;
  max-width: 1400px;
  margin: auto;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #273b56;
  opacity: 0.5;
  /*background: linear-gradient(0deg, rgba(134,244,255,0.577468487394958) 11%, rgba(41,138,154,0.48783263305322133) 51%, rgba(74,137,143,0.835171568627451) 76%, rgba(21,94,101,1) 100%);*/
}

.organization-logo{
  display: inline-block;
  margin: 4px 30px;
  width: 140px;
  text-align: center;
}

.organization-logo img {
  height: 100%;
  width: 100%;
}

.organization-logo img.smaller {
  height: 90%;
  width: 90%;
}

.logos-container {
  display: inline-block;
  text-align: center;
}

.logos-row {
  display: inline-block;
}

.intro-container {
  margin-bottom: 30px;
}

.intro-text {
  margin-top: 15px;
  color: white;
  padding: 0px 20%;
}

@media screen and (min-width: 817px) and (max-width: 1218px) {
  #main {
    background-size: cover;
    background-position-x: 10%;
  }

  .home-main-container {
    position:relative;
    height: 100%;
    padding: 70px 200px 183px;
  }

  .main-container {
    position:relative;
    height: 100%;
    padding: 150px 0px;
  }

  .intro-text {
    color: white;
    padding: 5px;
  }

  .home-main-container {
    position:relative;
    height: 100%;
    padding: 125px;
  }
}

@media screen and (min-width: 1218px) and (max-width: 1600px) {
  .main-container {
    position:relative;
    height: 100%;
    padding: 120px 0;
  }

  .intro-text {
    color: white;
    padding: 5px;
    padding: 0px 200px;
  }

  .home-main-container {
    position:relative;
    height: 100%;
    padding: 160px 120px;
  }
}

@media screen and (max-width: 804px)  {
  #main {
    background-size: cover;
    background-position-x: 50%;
  }

  .home-main-container {
    position:relative;
    height: 100%;
    padding: 25px;
    padding-top: 90px;
    padding-bottom: 10px;
  }

  .organization-logo{
    display: block;
    margin: 15px auto;
    width: 115px;
    text-align: center;
  }

  .main-container {
    position:relative;
    height: 100%;
    padding: 30px 10px;
  }

  .intro-text {
    /*margin-top: 20px;*/
    color: white;
    padding: 10px;
    font-size: 13px;
  }

  .intro-text.part2, .intro-text.part3 {
    display: none;
  }

  .logos-container {
    display: block;
    text-align: center;
  }

  .logos-row {
    display: inline-block;
    padding: 10px;
  }
}

@media (min-width: 1024px) and (min-height: 1200px)  {
  #main {
    background-size: cover;
    background-position-x: 50%;
  }

  .home-main-container {
    position:relative;
    height: 100%;
    padding: 470px 200px 300px;
  }

  .organization-logo{
    display: block;
    margin: 15px auto;
    width: 115px;
    text-align: center;
  }

  .main-container {
    position:relative;
    height: 100%;
    padding: 30px 10px;
  }

  .intro-text {
    margin-top: 20px;
    color: white;
    padding: 10px;
    font-size: 13px;
  }

  .logos-container {
    display: block;
    text-align: center;
  }

  .logos-row {
    display: inline-block;
    padding: 10px;
  }
}

@media screen and (min-width: 1900px) and (max-width: 2518px) {
  #main {
    position: relative;
    min-height: 100%;
    background: url('../assets/images/home-background.jpg');
    background-position-y: 30%;
    background-color: var(--var-theme-background);
    background-repeat: no-repeat;
    background-size: 120% !important;
    font-family: 'Montserrat' !important;
  }
}

</style>