<template>
  <div id="home">
    <div class="image-overlay"></div>
    <div class="main-container">
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
        <div class="intro-text">
          {{introduction}}
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

export default {
  name: 'main-sec',
  data: () => ({
    dataService: new DataService(),
    logos: [],
    introduction: '',
    vasyrDownloadLink2019: ''
  }),
  mounted() {
    this.introduction = this.dataService.getHomeIntro();
    this.vasyrDownloadLink2019 = this.dataService.getVasyrDownloadLink('2019');
  },
  methods: {
    getImgUrl(img) {
      return require(img);
    }
  }
}
</script>
<style scoped>
#home {
  position: relative;
  height: 100%;
  background: url('../assets/images/home-background.jpg');
  background-size: cover;
  background-position-y: 75%;
}

.main-container {
  position:relative;
  height: 100%;
  padding: 200px;
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

.intro-text {
  margin-top: 40px;
  color: white;
  padding: 45px 20%;
}


@media screen and (min-width: 817px) and (max-width: 1218px) {
  .main-container {
    position:relative;
    height: 100%;
    padding: 150px 0px;
  }

  .intro-text {
    margin-top: 40px;
    color: white;
    padding: 45px 110px;
  }
}

@media screen and (max-width: 804px)  {
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

</style>