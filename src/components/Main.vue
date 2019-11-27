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
            <img alt="vasyr logo" :src="require('@/assets/logos/unicef-logo.png')">
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
        <a :href="this.vasyrDownloadLink2019" v-bind:year="this.vasyrDownloadLink2019" target="_blank" class="btn btn-info">DOWNLOAD VASyR 2019</a>
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
    vasyrDownloadLink2019: ''
  }),
  mounted() {
    console.log('Mounted Main');
    this.introduction = this.dataService.getHomeIntro();
    this.vasyrDownloadLink2019 = this.dataService.getVasyrDownloadLink('2019');
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
  background: url('../assets/images/home-background.jpg');
  background-position-y: 75%;
  background-color: #273b56;
  background-repeat: no-repeat;
  background-size: 110%;
  font-family: 'Montserrat-Bold' !important;
}

.main-transition {
  transition: background-position 0.15s;
}

.home-main-container {
  position:relative;
  height: 100%;
  padding: 180px;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* background-color: #273b56; */
  background: linear-gradient(0deg, #f1f1f1, #273b56 50%) no-repeat;
  opacity: 0.5;
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
    background: url('../assets/images/home-background.jpg');
    background-position-y: 30%;
    background-color: #273b56;
    background-repeat: no-repeat;
    background-size: 120% !important;
    font-family: 'Montserrat-Bold' !important;
  }
}

</style>