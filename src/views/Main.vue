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
        <div class="intro-text part">
          {{introduction.part_1}}
        </div>
        <div class="intro-text part">
          {{introduction.part_2}}
        </div>
        <div class="intro-text part">
          {{introduction.part_3}}
        </div>
      </div>
      <div class="download-button">
        <a :href="this.vasyrDownloadLink2020" v-bind:year="this.vasyrDownloadLink2020" target="_blank" class="btn btn-info" download>DOWNLOAD VASyR 2020</a>
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
    vasyrDownloadLink2020: ''
  }),
  mounted() {
    console.log('Mounted Main');
    this.introduction = this.dataService.getHomeIntro();
    // this.vasyrDownloadLink2019 = this.dataService.getVasyrDownloadLink('2019');
    this.vasyrDownloadLink2020 = this.dataService.getVasyrDownloadLink('2020');
    let main = document.getElementById("main");

    if(!helpers.isMobile.any()) {
      main.addEventListener("mousemove", this.mouseMove);
      main.addEventListener("mouseenter", this.mouseEnter);
      main.addEventListener("mouseleave", this.mouseLeave);
    }
    
  },
  methods: {
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
      
      if(w >= 1900 && w <= 2518) {
         startImgPosition = 30;
      }

      let imageX = (mouseX/w)*10;
      let imageY = startImgPosition + (mouseY/h)*10;
      home.style["background-position"] = imageX + "% " + imageY + "%";
    },
    mouseEnter(element) {
      setTimeout(function() {
        this.main.classList.remove('main-transition');
      }, 150);
    },
    mouseLeave(element) {
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
  background: url('../assets/images/home-background.png');
  background-position-y: 75%;
  background-color: var(--var-theme-text-dark);
  background-repeat: no-repeat;
  background-size: 110%;
  font-family: 'Montserrat' !important;
}

.main-transition {
  transition: background-position 0.15s;
}

.home-main-container {
  position:relative;
  height: 100%;
  padding: 180px;
  max-width: 1400px;
  margin: auto;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* background-color: #273b56; */
  background: linear-gradient(0deg, rgba(134,244,255,0.577468487394958) 11%, rgba(41,138,154,0.48783263305322133) 51%, rgba(74,137,143,0.835171568627451) 76%, rgba(21,94,101,1) 100%);
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
    background-position-x: 50%;
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
    background: url('../assets/images/home-background.png');
    background-position-y: 30%;
    background-color: var(--var-theme-background);
    background-repeat: no-repeat;
    background-size: 120% !important;
    font-family: 'Montserrat' !important;
  }
}

</style>